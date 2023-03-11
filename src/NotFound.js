import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div>
        <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Fsd68tsMtqC344QvxnZ6hsNt6mktkA0L21-aOOU3SQ&s"/>
        <Link className="px-1 py-1 hover:bg-blue-500 text-black font-bold flex items-center justify-center mt-2 text-2xl bg-pink-300 rounded-md" to={"http://localhost:3000/"}>Back to Home Page </Link>
        </div>);
}
export default NotFound;