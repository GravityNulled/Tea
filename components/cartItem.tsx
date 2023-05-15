import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex justify-between gap-5 ">
      <Image
        alt="cart"
        src="/images/t1.jpg"
        width={80}
        height={80}
        className="h-[80px]"
      />
      <div className="flex gap-3 flex-col">
        <p className="text-sm font-semibold">
          Ceylon Ginger Cinnamon chai tea - 50 g
        </p>
        <button className="uppercase w-fit ">Remove</button>
      </div>
      <div className="flex gap-3 items-center flex-col">
        <div className="flex gap-2 items-center">
          <button className="text-2xl">-</button>
          <p className="text-2xl">1</p>
          <button className="text-2xl">+</button>
        </div>
        <p className="text-xl">$3.90</p>
      </div>
    </div>
  );
};

export default CartItem;
