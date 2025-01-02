/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2 className="my-5 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-2 flex">
          <label className="basis-[200px]">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="w-full rounded-xl px-2 py-1"
          />
        </div>

        <div className="mb-2 flex">
          <label className="basis-[200px]">Phone number</label>

          <input
            type="tel"
            name="phone"
            required
            className="w-full rounded-xl px-2 py-1"
          />

          {formErrors?.phones && <p>{formErrors.phones}</p>}
        </div>

        <div className="mb-2 flex">
          <label className="basis-[200px]">Address</label>

          <input
            type="text"
            name="address"
            required
            className="w-full rounded-xl px-2 py-1"
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="mt-5 rounded-full bg-yellow-500 px-4 py-1"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phones = `Please give us your correct phone number. we might need it to contact you.`;
  }
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
