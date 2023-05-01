import { useRouter } from "next/router";
import React from "react";

function Product() {
  const router = useRouter();
  const { ing } = router.query;
  
  return <div>Product</div>;
}

export default Product;
