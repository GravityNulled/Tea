import React from "react";
import Ingridient from "./Ingridient";

const Recommendation = () => {
  return (
    <div className="grid md:grid-cols-3 md:w-[800px] mx-auto">
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
  );
};

export default Recommendation;
