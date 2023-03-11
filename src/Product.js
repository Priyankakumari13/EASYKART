import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, price, title, category, id }) {
    console.log("Product wala id", id);
   
    return (
        <div className="max-w-xs">
           <div className="w-full aspect-square">
             <img className="w-full h-full object-cover"  src={thumbnail} /> </div>
            <div >{price} Rs</div>
            <div>{title}</div>
            <div className="text-grey-700 text-s">{category}</div>
            <Link to={"/products/" + id} className=" text-md text-grey-700 border rounded-md border-b-red-500 self-start  hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">view details</Link>
           
        </div>
         
    ); 
   
}

export default Product;