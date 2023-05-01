import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Ingridient from "@/components/Ingridient";
import { ingridients } from "../../data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
const Type = () => {
  const router = useRouter();
  const { type } = router.query;
  const [colClicked, setColClicked] = useState(false);
  return (
    <div className="py-10 ">
      <Image
        src="/images/banner.jpg"
        height={100}
        width={1024}
        alt="banner"
        className="object-cover h-[250px] w-full"
      />
      <p className="w-5/6 mx-auto mt-8">
        HOME/COLLECTION/{typeof type === "string" ? type.toUpperCase() : ""}
      </p>
      <div className="container flex justify-around w-5/6 py-10 mt-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-10">
            <p className="text-sm uppercase">Collections</p>
            {colClicked ? (
              <AiOutlineMinus
                className="cursor-pointer"
                onClick={() => setColClicked(!colClicked)}
              />
            ) : (
              <AiOutlinePlus
                className="cursor-pointer"
                onClick={() => setColClicked(!colClicked)}
              />
            )}
          </div>
          {colClicked && (
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex gap-4">
                <input type="checkbox" name="blackteas" id="blackteas" />
                <label htmlFor="blackteas" id="blackteas">
                  Black tea
                </label>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" name="greenteas" id="greenteas" />
                <label htmlFor="greenteas" id="greenteas">
                  Green tea
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-10">
          {ingridients.map((ingrident, index) => {
            return (
              <Link href={`${type}/${ingrident.sku}`} key={index}>
                <Ingridient
                  sku={ingrident.sku}
                  image={ingrident.image}
                  name={ingrident.name}
                  price={ingrident.price}
                  weight={ingrident.weight}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Type;
