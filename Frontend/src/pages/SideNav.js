import react from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
function SideNav({onClick}){
//const navigate = Navigate()
  const { user } = useContext(UserContext);
    return(
    


        <div className="sideNavbar">
      {/*<button onClick={onClick} className="closeBtn">Close</button>*/}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
       
      </ul>
    </div>
    
    )
}
export default SideNav;