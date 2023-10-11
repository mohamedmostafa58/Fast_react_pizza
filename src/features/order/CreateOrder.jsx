/* eslint-disable react-refresh/only-export-components */
// import { useState } from "react";

import { Form, redirect } from "react-router-dom";
// import Order from "./Order";
import { createOrder } from "../utility/apiRestaurant";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import store from "../../store";
import { clearcart } from "../cart/cartSlice";
import { formatCurrency } from "../utility/helpers";
import { fetchUserAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const pizzaprice = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  );
  const {
    username,
    address: userAddress,
    position,
    status: addressStatus,
    error,
  } = useSelector((state) => state.user);
  const price = pizzaprice + (withPriority ? 8 : 0);
  return (
    <div className="bg-stone-200 h-full py-8 px-6">
      <h2 className="font-semibold text-xl mb-4">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="flex flex-col gap-2 sm:flex-row my-8">
          <label className="sm:basis-1/5 text-lg">First Name</label>
          <div className="sm:w-96 ">
            <input
              type="text"
              name="customer"
              className="input w-full"
              required
              defaultValue={username}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row my-8">
          <label className="sm:basis-1/5 text-lg">Phone number</label>
          <div className="sm:w-96 ">
            <input type="tel" name="phone" className="input w-full" required />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row mt-6">
          <label className="sm:basis-1/5 text-lg">Address</label>
          <div className="sm:w-96 relative">
            <input
              type="text"
              name="address"
              className="input w-full"
              defaultValue={userAddress}
              required
            />
            {!position.latitude && (
              <span className="absolute right-[3px]">
                <Button
                  type="small"
                  disabled={addressStatus === "loading"}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchUserAddress());
                  }}
                >
                  get address
                </Button>
              </span>
            )}
          </div>
        </div>
        {addressStatus === "error" && (
          <p className="bg-red-300 p-2 inline-block my-2 text-center">
            {" "}
            {error}
          </p>
        )}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-300 focus:outline-none h-6 w-6"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <Button type="small">order now for {formatCurrency(price)}</Button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export default CreateOrder;
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const Order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const newOrder = await createOrder(Order);
  store.dispatch(clearcart());
  return redirect(`/order/${newOrder.id}`);
}
