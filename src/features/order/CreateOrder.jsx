/* eslint-disable react-refresh/only-export-components */
// import { useState } from "react";

import { Form, redirect } from "react-router-dom";
// import Order from "./Order";
import { createOrder } from "../utility/apiRestaurant";
import Button from "../ui/Button";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

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
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row my-8">
          <label className="sm:basis-1/5 text-lg">Phone number</label>
          <div className="sm:w-96 ">
            <input type="tel" name="phone" className="input w-full" required />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row my-6">
          <label className="sm:basis-1/5 text-lg">Address</label>
          <div className="sm:w-96 ">
            <input
              type="text"
              name="address"
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="accent-yellow-300 focus:outline-none h-6 w-6"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <Button type="small">order now</Button>
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
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(Order);
  return redirect(`/order/${newOrder.id}`);
}
