import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineGlobal, AiFillGift } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";
import { BsCupHot } from "react-icons/bs";
import { TfiAlarmClock } from "react-icons/tfi";
import { TbTemperature } from "react-icons/tb";
import Ingridient from "@/components/Ingridient";

function Product() {
  const router = useRouter();
  const { ing, type } = router.query;

  return (
    <div className="container mx-auto md:w-5/6">
      <p className="mt-8 uppercase">
        Home/Collection/{type}/{ing}
      </p>
      <div className="flex gap-10 mt-10">
        <Image
          src="/images/t4.jpg"
          alt="tea"
          width={400}
          height={400}
          className="object-cover h-[400px]"
        />
        <div className="flex flex-col">
          <h1 className="font-secondary text-2xl mb-3">
            Ceylon Ginger Cinnamon chai tea
          </h1>
          <p>A lovely warming chai tea with ginger cinnamon flavors</p>
          <div className="flex justify-between mt-5 items-center">
            <div className="flex gap-1 items-center">
              <AiOutlineGlobal />
              <p>Origin: Kenya</p>
            </div>
            <div className="flex gap-1 items-center">
              <AiFillGift />
              <p>Organic</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiLeaf />
              <p>Vegan</p>
            </div>
          </div>
          <p className="mt-5 font-secondary text-3xl">$3.90</p>
          <div className="flex gap-5 mt-8">
            <div className="flex items-center gap-3">
              <button className="text-3xl">-</button>
              <p className="font-secondary text-2xl">1</p>
              <button className="text-3xl">+</button>
            </div>
            <Button
              bg_color="bg-black"
              f_color="text-white"
              text="ADD TO BAG"
              onClick={() => console.log("firstw")}
            />
          </div>
        </div>
      </div>
      <div className="flex bg-background_2 mt-10 gap-5">
        <div className="flex-col mx-8">
          <p className="text-2xl py-10">Steeping instructions</p>
          <div className="flex flex-col pb-10">
            <div className="flex gap-2">
              <BsCupHot />
              <p className="border-b-[1px] border-black">
                SERVING SIZE: 2 tsp per cup, 6 tsp per pot
              </p>
            </div>
            <div className="flex gap-2 mt-5">
              <TbTemperature />
              <p className="border-b-[1px] border-black pb-1">
                WATER TEMPERATURE: 100°C
              </p>
            </div>
            <div className="flex gap-2 mt-5">
              <TfiAlarmClock />
              <p className="border-b-[1px] border-black pb-1">
                STEEPING TIME: 3 - 5 minutes
              </p>
            </div>
            <div className="flex gap-2 mt-5">
              <p className="w-[20px] h-[20px] rounded-full bg-[#BC575F]"></p>
              <p className="border-b-[1px] border-black pb-1">
                COLOR AFTER 3 MINUTES
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl py-10">About this tea</p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex flex-col border-r-[1px] pr-5 border-black">
                <p>FLAVOR</p>
                <p>Spicy</p>
              </div>
              <div className="flex flex-col border-r-[1px]  pr-5 border-black">
                <p>QUALITIES</p>
                <p>Smoothing</p>
              </div>
              <div className="flex flex-col border-r-[1px]  pr-5 border-black">
                <p>CAFFEINE</p>
                <p>Medium</p>
              </div>
              <div className="flex flex-col border-r-[1px]  pr-5 border-black">
                <p>ALLERGENS</p>
                <p>Nuts-free</p>
              </div>
            </div>
            <p className="mt-6 mb-2 text-xl">Ingredient</p>
            <p>
              Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
              Cinnamon sticks, Cardamom, Cinnamon pieces.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-10">
        <p className="font-secondary font-black text-2xl text-center mb-10">
          You may also like
        </p>
        <div className="grid grid-cols-3 w-[800px] mx-auto">
          <Ingridient
            image="/images/t1.jpg"
            name="Ceylon Ginger Cinnamon chai tea"
            price={4}
            weight="50g"
            sku="asddsa"
            discount={0}
          />
          <Ingridient
            image="/images/t2.jpg"
            name="Ceylon Ginger Cinnamon chai tea"
            price={4}
            weight="50g"
            sku="asddsa"
            discount={0}
          />
          <Ingridient
            image="/images/t3.jpg"
            name="Ceylon Ginger Cinnamon chai tea"
            price={4}
            weight="50g"
            sku="asddsa"
            discount={0}
          />
        </div>
      </p>
    </div>
  );
}

export default Product;
