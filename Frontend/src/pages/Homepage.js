import react, { useState } from "react";
import homeimg1 from '../media/basket.jpg';
import homeimg2 from '../media/market.jpg';
import homeimg3 from '../media/homebg.jpg';
import homeimg4 from '../media/greenbg.jpg';
import NavBar from '../NavBar';
import './Homepage.css';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Products from "./Products";
import MenuTitleChanger from "./MenutTitleChanger";
import menu from '../media/menu.png' 
import SideNav from "./SideNav";
import MenuButton from "./MenuButton";
function Homepage() {
  const navigate = useNavigate()
  function toProducts(){
   navigate('/products')
}
function toProfile(){
  navigate('/myProfile')
}

const [isMenu,setIsMenu] = useState(false)

  return (
    <div className="mainContainer"  >   
      
      <div className="headerContainer">


        <MenuTitleChanger  text="eGrocer" className='whiteText'/>
        
        
      </div>
       <MenuButton onClick={()=>setIsMenu(prev => !prev)} clickEffect='true' scrollEffect='true' buttonText={isMenu ? "Close" : "Menu"} className={'menuButtonHome'}/>
      {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}

 
        <MenuButton onClick={()=>{navigate('/products')}} scrollEffect='true' buttonText={'Order'} className={'orderButton'}/>
      
      <div className="homeImg4">
        <img src={homeimg4} alt="img"></img>
      </div>
      <div className="homepageContainer">
       
        <div className="gridContainer">


          <div className="grid">
       
        <img src={homeimg1} alt="img"></img>
       
        <p>Our vegetables are grown in rich, chemical-free soil that promotes biodiversity and healthy ecosystems.
We work with growers who value natural cycles and regenerative methods.
The result? Clean, vibrant food straight from nature.</p>
      
      </div>
      <div className="scrollingContainer">
        <div className="scrollText" >
          <span>Taste the Difference of Local Produce!    </span><span>Farm to Table – Delivered Fresh Daily!   </span>  <span>Free Delivery for Orders Over $25 – Shop Now!    </span>        
          
          
        </div>
      </div>


      <div className="grid">
       <p>Sustainable agriculture isn’t a trend — it’s our foundation.
Every crop is cultivated with care for land, air, and future generations.
Your choices today shape tomorrow’s environment.</p>
        <img src={homeimg2} alt="img"></img>
      
        
      
      </div>
      <div className="grid">
       
        <img src={homeimg3} alt="img"></img>
       
        <p>We use recyclable packaging and low-emission delivery options to reduce our environmental impact.
Your order arrives fresh — with a smaller carbon footprint.
Sustainability doesn’t stop at the farm — it goes all the way to your door.</p>

      </div>
      
      </div>
        
        
      </div>
      <div className="footerContainer">

      </div>
    </div>
  );
}

export default Homepage;