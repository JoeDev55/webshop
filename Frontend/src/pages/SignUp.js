import react from "react";


import { useNavigate } from "react-router";
import { useState } from "react";
import SideNav from "./SideNav";
import MenuButton from "./MenuButton";
function SignUp() {
  const navigate = useNavigate()
  const [isMenu,setIsMenu] = useState(false)
  function toLogIn(){
    navigate('/logIn')
  }
  async function sendCredentials(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      birthDate: formData.get("birthDate")
    }

    try{
      const response = await fetch('http://localhost:3000/signup',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
      })
      if (response.ok) {
        
        navigate("/myProfile")
      }
      else{
        alert('error during signup')
      }
    }catch{
      console.log('server error')
    }
    
  }
  
  return (
    <div className="mainContainer">
          <header className="App-header">
         
          </header>
           <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={'menuButton'}/>
            {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
          <div className="signUpContainer" >
    
            
              <span style={{color:"white", display:"flex", justifyContent:'center'}}>
                sign up page
              </span>

              <form onSubmit={sendCredentials}>
                <input placeholder="E-mail" name="email"/>
                <input placeholder="Password" type="password" name="password"/>
                <input placeholder="First name" name="firstName"/>
                <input placeholder="Last name" name="lastName"/>
                <input placeholder="Phone number" type="tel" name="phoneNumber"/>
                <input placeholder="Date of birth" name="birthDate"/>
                <button type="submit">Submit</button>
              </form>
            
            
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