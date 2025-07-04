import react from "react";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
function SideNav({onClick}){
//const navigate = Navigate()

    return(
    


        <div className="sideNavbar">
      {/*<button onClick={onClick} className="closeBtn">Close</button>*/}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign up</a></li>
        
      </ul>
    </div>
    
    )
}
export default SideNav;