import Shop from "@/components/Shop"; 
import { getAllBrands, getCategories } from "@/sanity/queries"; 
import React from "react";

const ShopPage = async () => {
   const categories = await getCategories();
  const brands = await getAllBrands(); 
  return (
    <div className="bg-white">
       <Shop categories={categories} brands={brands} />
     <h1>page shop</h1>
    </div>
  );
};

export default ShopPage;