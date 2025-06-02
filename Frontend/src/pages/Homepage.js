import react from "react";
import homebg from '../media/homebg.jpg';
import NavBar from '../NavBar';
import '../styles.css';
import { useEffect } from "react";
import { Link, useNavigate } from "react-router";


function Homepage() {
  const navigate = useNavigate()
  function toProducts(){
   navigate('/products')
}
function toProfile(){
  navigate('/myProfile')
}

  return (
    <div className="mainContainer"  >
      
      <div className="headerContainer">
        <NavBar/>
      </div>
      <div className="homepageContainer">
        <div className="signUp">
          Sign up now
          <button onClick={toProfile}>
            <span>
              Sign up 
            </span>
          </button>
          
        </div>
        <div className="slideShow">
          <div className="slideShowBox">

          </div>
          </div>
        <div className="shopQuick">
          
          <button onClick={toProducts}>
            <span>
              Shop now
            </span>
          </button>
          <span>
            Shop now eat fresh
          </span>
        </div>
        
      </div>
      <div className="footerContainer">

      </div>
    </div>
  );
}

export default Homepage;