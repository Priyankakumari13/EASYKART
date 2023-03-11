import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './Api';
import NoMatching from "./NoMatching";
import Loading from './Loading';


function ProductListPage() {
 
const[productlist, setProductList]=useState([]);
const[loading, setLoading]=useState(true);



  useEffect(function(){
  const xyz= getProductList();
 
  xyz.then(function(product){
    setProductList(product);
setLoading(false);
  });
 
  }, []);

const [query,setQuery] = useState ("");
const [sort, setsort] =useState ("price");

  
  let data= productlist.filter(function(item){
    return item.title.toLowerCase().indexOf(query.toLowerCase()) !=-1;
  });


 
  function handleSearchchange(event){
    setQuery(event.target.value);}

if(sort=="price"){
data.sort(function (item1,item2){
  return item1.price - item2.price;
});
}
else if(sort==="name"){
  data.sort(function(x,y){
  return (x.title < y.title ? -1 : 1);
  });
}
  
  function handleSortchange(event){
    setsort(event.target.value);
  }
if(loading){
  return (<Loading />);
}


  return (
    <div className='p-2 max-w-6xl mx-auto bg-white px-9 py-12 my-16'>
    <div className='space-x-2 '>
     <input 
     value={query}
     placeholder="search"
     className="border border-gray-700 rounded-md bg-grey-600"
     onChange={handleSearchchange}
     />
<lebel for="myselect"></lebel>
     <select id="myselect"
      className='border border-gray-700 bg-grey-700 rounded-md'
     value={sort}
     onChange={handleSortchange} >
     <option value="default">Default sort</option>
     <option value ="name">sort by name</option>
      <option value="price">sort by price</option>
     </select>  
     </div>
   {data.length > 0 && <ProductList products= {data}/>}
   {data.length == 0 && <NoMatching>No Matching found</NoMatching> }

      </div> 
  );
}

export default ProductListPage;