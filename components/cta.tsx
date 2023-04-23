import React from "react";
import { BsCup, BsTruck } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import { AiOutlineTag } from "react-icons/ai";
import Button from "./button";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 my-28 bg-background_2">
      <div className="flex items-center justify-center gap-8 mb-10">
        <div className="flex items-center gap-1">
          <BsCup />
          <p>450+ KIND OF LOOSEF TEA</p>
        </div>
        <div className="flex items-center gap-1">
          <BiLeaf />
          <p>CERTIFICATED ORGANIC TEAS</p>
        </div>
        <div className="flex items-center gap-1">
          <BsTruck />
          <p>FREE DELIVERY</p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineTag />
          <p>SAMPLE FOR ALL TEAS</p>
        </div>
      </div>
      <Button
        bg_color="bg-white"
        f_color="text-primary"
        text="LEARN MORE"
        onClick={() => console.log("clicked")}
      />
    </section>
  );
};

export default CTA;
