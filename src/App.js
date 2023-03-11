import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';

function App() {
        const savedDataString = localStorage.getItem("my-cart") || "{}";
        const savedData = JSON.parse(savedDataString);

        const [cart, setCart] = useState(savedData);

        function HandleAddToCart(productId, count) {
                console.log("productid id", productId, "count of productid", count);
                const oldCount = cart[productId] || 0;
                const newCart = { ...cart, [productId]: oldCount + count };
                setCart(newCart);
                const stringCart = JSON.stringify(newCart);
                localStorage.setItem("my-cart", stringCart);
        };



        const totalCount = Object.keys(cart).reduce(function (previous, current) {
                return previous + cart[current];
        }, 0);
        console.log("totalcount app.jsx", totalCount);
        // const path = window.location.pathname;
        return (
                <div className='bg-gray-200 h-screen overflow-y-scroll flex flex-col'>
                        <Navbar TotalCountchange={totalCount} />

                        <div className='grow'>
                                <Routes>
                                        <Route index element={<ProductListPage />}></Route>
                                        <Route path="/products/:id" element={<ProductDetails onAddToCart={HandleAddToCart} />}></Route>
                                </Routes>
                        </div>

                </div>

        );
}

export default App;




