import react from "react";

import NavBar from '../NavBar';
import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate()
  function toLogIn(){
    navigate('/logIn')
  }
  return (
    <div className="mainContainer">
          <header className="App-header">
            <NavBar/>
          </header>
    
          <div className="signUpContainer" >
    
            
              <span style={{color:"white", display:"flex", justifyContent:'center'}}>
                sign up page
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
                <input type="text" placeholder="First name" >
                </input>
            </div>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="Last name" >
                </input>
            </div>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="Phone number" >
                </input>
            </div>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="Address" >
                </input>
            </div>
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <input type="text" placeholder="Date of birth" >
                </input>
            </div>
            
                <span style={{color:"white", display:"flex", justifyContent:'center'}}>
                     Already have an account?
                </span>
               
            
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <button onClick={toLogIn}>
                    <span>Log in</span>
                </button>
            </div>
            
          </div>
        </div>
  );
}

export default SignUp;