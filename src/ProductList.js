import React from "react";
import Product from "./Product";

function ProductList({products}){
   return(
   <div className="rounded-lg md:grid grid-cols-3 gap-2 space-y-2 md:space-y-0">
{
   products.map(function (item)
   {
      return (
      <Product 
   {...item}/>
      );
   })
} 


</div>
);
}

export default ProductList;