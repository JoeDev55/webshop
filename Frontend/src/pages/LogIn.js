import react from "react";

import NavBar from '../NavBar';
import { useNavigate } from "react-router";

function LogIn() {
    const navigate = useNavigate()
    function toSignUp(){
        navigate('/signUp')
    }
  return (
    <div className="mainContainer">
          <header className="App-header">
            <NavBar/>
          </header>
    
          <div className="logInContainer" >
    
             
              <span style={{color:"white", display:"flex", justifyContent:'center'}}>
                log in page
              </span>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="E-mail" >
                </input>
            </div>

            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="Password" >
                </input>
            </div>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
              <button>
                <span>
                  Log in
                </span>
              </button>
            </div>
            
                <span style={{color:"white", display:"flex", justifyContent:'center'}}>
                     Don't have an account?
                </span>
               
            
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <button onClick={toSignUp}>
                    <span>Sign up now</span>
                </button>
            </div>

            
          </div>
        </div>
  );
}

export default LogIn;