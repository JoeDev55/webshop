import react from "react";

import NavBar from '../NavBar';
import SideNav from './SideNav';
import MenuButton from './MenuButton';
import { useState } from 'react';
function AboutUs() {
 const [isMenu,setIsMenu] = useState(false)
  return (
    <div className="mainContainer">
          <header className="App-header">
           
          </header>
          <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={'menuButton'}/>
            {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
          <div className="aboutUsContainer" >
    
             <div className="signUp">
                    About us
                </div>
          </div>
        </div>
  );
}

export default AboutUs;