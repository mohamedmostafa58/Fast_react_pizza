// Test ID: IIDSAT

import CartItem from "../cart/CartItem";
import { getOrder } from "../utility/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../utility/helpers";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  status: "preparing",
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="p-4">
      <div className="flex justify-between gap-3 flex-wrap">
        <h2 className="text-2xl ">Order# {id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 p-2 rounded-2xl text-stone-100 text-l">
              Priority
            </span>
          )}
          <span className="p-2 rounded-2xl bg-green-600 text-stone-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-6 gap-3 flex-wrap bg-stone-300 py-8 px-4">
        <p>
          {deliveryIn >= 0
            ? "Order should have arrived"
            : `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="divide-y my-10">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} order={true} />
        ))}
      </ul>
      <div className="bg-stone-300 mt-4 space-y-4 py-8 px-4">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
