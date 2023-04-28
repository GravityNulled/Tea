import React from "react";
import Image from "next/image";
import { teas } from "@/data";
const Collection = () => {
  return (
    <div className="py-10">
      <h2 className="text-xl text-center font-secondary">Our Collections</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {teas.map((tea, index) => {
          return (
            <div className="flex flex-col items-center" key={index}>
              <Image
                width={400}
                height={300}
                className="object-cover h-[300px]"
                src={tea.image}
                alt="tea"
              />
              {/* <Image src={tea.image} alt="tea" width={400} height={300} /> */}
              <p className="py-4 text-xl uppercase">{tea.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
