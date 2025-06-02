import react from "react";
import NavBar from '../NavBar';
import { useNavigate } from "react-router";

function MyProfile() {
  const signedIn=false
  const navigate = useNavigate()
  function logIn(){
    navigate('/logIn')
  }
  function signUp(){
    navigate('/signUp')
  }
  if (!signedIn) {
    return(
      
    <div className="mainContainer">
      <header className="App-header">
        <NavBar/>
      </header>

      <div className="profileContainer" >
        <div className="signUp">
          <button onClick={signUp}>
            <span>
              Sign up
            </span>
          </button>
          <button onClick={logIn}>
            <span>
              Log in
            </span>
          </button>
        </div>
        <div className="signInStatus">
                Not signed in 
        </div>
      </div>
    </div>
  );
    
  }
  else{
 return (
    <div className="mainContainer">
      <header className="App-header">
        <NavBar/>
      </header>

      <div className="profileContainer" >
        
        <div className="signInStatus">
                Signed in 
        </div>
      </div>
    </div>
  );
  }

 
}

export default MyProfile;