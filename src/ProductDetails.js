import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import NotFound from "./NotFound";


function ProductDetails({ onAddToCart }) {
  const id = +(useParams().id);
  const [prod, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  function handleCount(event) {
    setCount(+event.target.value);
  }

  useEffect(function () {
    const p = getProductData(id);
    p.then(function (response) {
      setProduct(response);
      setLoading(false);
      console.log("response.data is", response.data);
    }).catch(function () {
      console.log("API ERRor");
      setLoading(false);

    })
      ;
  }, [id]);

  function HandleclickButton() {
    onAddToCart(id, count);
  }

  if (loading) {
    return (<Loading />);
  }
  if (!prod) {
    return (<div className="flex items-center justify-center"><NotFound /></div>);
  }

  return (
    <div>
<div className="flex items-center justify-center">
      <Link className="text-l hover:bg-blue-700 text-black font-bold py-1 px-2 rounded mt-2 flex items-center justify-center " to="/"><HiArrowNarrowLeft />Back to Home page </Link>
      </div>
<div className="flex flex-col items-center justify-center">

      <div className="bg-black-300 p-2 rounded-md max-w-xs w-200 h-200">
        <img className="" src={prod.thumbnail} /></div>
      <div className="px-2">{prod.title}</div>
      <div className="px-2 ">price is {prod.price} Rs.</div>
      <p className="px-2 ">{prod.discription}</p>

      <div className=" py-1">
        <input type="Number" onChange={handleCount} value={count} className="px-2 py-1 rounded-md border border-black" />
        </div>
<lebel for="mycart"></lebel>
        <button id="mycart" onClick={HandleclickButton} className="hover:bg-blue-700 text-black font-bold py-2 px-4 rounded  border border-black rounded-md"> Add to cart </button>
      
      <discription />
      </div>
      <div className="flex justify-between">
        {id > 1 && (<Link className=" mt-2 flex items-center text-l hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" to={"/Products/" + (id - 1)}><HiArrowNarrowLeft /> Previous</Link>)}
        <Link className="flex items-center text-l hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" to={"/Products/" + (id + 1)}><HiArrowNarrowRight /> Next</Link>
      </div>

    </div>
  )
}
export default ProductDetails;




//BTech from Nation Institute of Technology, Srinagar, Start date -7 august 2018, end date- 20 June 2022, Electrical Engineering, CGPA-7.3
//12th, India, Bihar Board, Start year-2015, end year-2017, CGPA- 6.7
//10th, India, Bihar, 2014-2015, CGPA- 7.1, Bihar board.


  //for (let i = 0; i < alldata.length; i++) {
   //     const p = alldata[i];
   //     if (id == p.id) {
    //        product = p;
     //       break;
      //  }
   // }
