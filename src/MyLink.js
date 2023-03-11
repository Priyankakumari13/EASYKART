import React from "react";

 function MyLink ({href,children,target}){
    return(
<div>
    <a className="text-green-700 border-2 border-b-red-500 self-start" href={href} target={target}>{children}</a>
</div>
    );
 }

 export default MyLink;