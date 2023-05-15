import Button from "@/components/button";
import CartItem from "@/components/cartItem";
import React from "react";

const Cart = (props: any) => {
  return (
    <div className="container md:w-5/6 mx-auto py-10">
      <div className="flex items-center justify-between">
        <p className="uppercase">1. My Bag</p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
        <p className="uppercase">2. Delivery </p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
        <p className="uppercase">3. Review & Payment </p>
        <p className="border-b-[2px] w-[200px] border-black"></p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <div className="flex gap-5 flex-col">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <p className="border-black border-b-2 mt-8"></p>
          <div className="flex justify-between my-8">
            <p>Subtotal</p>
            <p>€3.90</p>
          </div>
          <Button
            bg_color="bg-white"
            f_color="text-black"
            onClick={() => console.log("s")}
            text="Back to shopping"
          />
        </div>
        <div className="flex flex-col bg-background_2">
          <p className="mx-8 py-8">Order summary</p>
          <div className="flex gap-4 flex-col mx-8">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>€3.90</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>€3.95</p>
            </div>
            <p className="border-b-[2px] border-black"></p>
            <div className="flex justify-between">
              <p>Total</p>
              <p>€7.85</p>
            </div>
            <p className="text-sm">Estimated shipping time: 2 days</p>
            <Button
              bg_color="bg-black"
              f_color="text-white"
              onClick={() => console.log("")}
              text="Check out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
