import React from "react";
import Image from "next/image";
import { teas } from "@/data";
import Link from "next/link";
const Collection = () => {
  return (
    <div className="py-10">
      <h2 className="text-xl text-center font-secondary">Our Collections</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {teas.map((tea, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <Link href={`collections/${tea.name}`}>
                <Image
                  width={400}
                  height={300}
                  className="object-cover h-[300px] hover:scale-105 duration-300 ease-in-out"
                  src={tea.image}
                  alt="tea"
                />
              </Link>
              <Link href={`collections/${tea.name}`}>
                <p className="py-4 text-xl uppercase cursor-pointer">
                  {tea.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
