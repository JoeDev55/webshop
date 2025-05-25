import react from "react";
import homebg from '../media/homebg.jpg';
import NavBar from '../NavBar';
import '../styles.css';
function Homepage() {
  return (
    <div className="mainContainer"  >
      
      <header className="headerContainer">
        <NavBar/>

            
        
      </header>
      <body>
        <div id="homeBgContainer">
              
              
              <div className="shopQuick">
                <button>Shop now</button>
                <p>
                  Shop now eat fresh!
                </p>
              </div>
              
                
        </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Homepage;