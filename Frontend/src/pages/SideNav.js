import react from "react";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
function SideNav({onClose=()=>{}}){
//const navigate = Navigate()

    return(
    


        <div className="sideNavbar">
      <button onClick={onClose} className="closeBtn">X</button>
      <ul>
        <li><a href="/products">Products</a></li>
        <li><a href="/aboutUs">Vegetables</a></li>
        <li><a href="/aboutUs">Fruits</a></li>
        <li><a href="/aboutUs">Nuts</a></li>
        <li><a href="/aboutUs">Dairy</a></li>
        <li><a href="/aboutUs">Meat</a></li>
        <li><a href="/aboutUs">About Us</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign up</a></li>
        
      </ul>
    </div>
    
    )
}
export default SideNav;