import React from "react";
import { Link } from "react-router-dom";
 
function Sidebar() {
return(
<div className="w-80 h-screen bg-gray-300 p-2 flex flex-col space-y-3">
<Link to="/">Home page</Link>
<Link to="/products/1/:sku">product details</Link>
</div>

);
}

export default Sidebar;