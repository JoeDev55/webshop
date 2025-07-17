import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar";
import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import { useNavigate } from "react-router";
import "./Myprofile.css";
import { UserContext } from "./UserContext";

function MyProfile() {
  const navigate = useNavigate();
  const { user, logout, token, loading } = useContext(UserContext);
  const [isMenu,setIsMenu] = useState(false)
  // If no user, navigate to login
  useEffect(()=>{
      
    if (!loading && user === null) {
      console.log("No user, navigating...");
      navigate("/logIn");
}
    console.log("User:", user);
console.log("Loading:", loading);
console.log("Token:", token);
    

 
  
  },[loading,logout, token,user,navigate])
  
   if (loading) return null;

  if (!user) return null;
  
  


  return (
    <div className="mainContainer">
      
      <MenuButton onClick={()=>setIsMenu(prev => !prev)}   buttonText={isMenu ? "Close" : "Menu"} className={'menuButtonMyProfile'}/>
      {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}

 
        <MenuButton onClick={()=>{navigate('/products')}}  buttonText={'Order'} className={'orderButton'}/>
      <div className="profileContainer">
        
        <div className="signInStatus">
          Signed in as {user === null ? "nemár" : user.firstName}
          <div>
            <button onClick={logout}>Log out</button>
          </div>
        </div> 
        
      </div>
    </div>
  );
}

export default MyProfile;
