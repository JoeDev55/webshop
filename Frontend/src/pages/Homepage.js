import react from "react";
import homebg from '../media/homebg.jpg';
import NavBar from '../NavBar';
import '../styles.css';
function Homepage() {
  return (
    <div className="mainContainer"  >
      
      <div className="headerContainer">
        <NavBar/>
      </div>
      <div className="bodyContainer">
        <div className="slideShow">
          <div className="slideShowBox">

          </div>
          </div>
        <div className="shopQuick">
          
          <button>
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