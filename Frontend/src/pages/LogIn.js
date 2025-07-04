//import react from "react";

import NavBar from '../NavBar';
import { useNavigate } from "react-router";
import { useState } from 'react';
import MyProfile from "./MyProfile";
import SideNav from './SideNav';
import MenuButton from './MenuButton';
import './Login.css';
function LogIn() {
    const navigate = useNavigate()
    const [isMenu,setIsMenu] = useState(false)
    function toSignUp(){
        navigate('/signUp')
    }
    const logInUser = async(e)=>{
      e.preventDefault()
      const formData = new FormData(e.target)
      const credentials={
        email: formData.get('email'),
        password: formData.get('password')
      }
      try{
        const response = await fetch('http://localhost:3000/login',
          {
            method:'POST',
            headers:{
              'Content-type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
          }
        )
        const data = await response.json()
        if (response.ok) {
          localStorage.setItem('token',data.token)
          console.log('Token saved:', localStorage.getItem('token'));
          console.log('login successful')
        
          localStorage.setItem('email', data.email);
          navigate('/myProfile')
          
          

        }
        else{
          console.error('login failed', data.message)
        }
        
      }
      catch(err){
        console.error(err)
        }
    }
  return (
    <div className="mainContainer">
          <header className="App-header">
            
          </header>
          <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={'menuButtonLogIn'}/>
            {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}


          <div className="logInContainer" >

             <div className='logInCard'>
              <span style={{color:"black", display:"flex", justifyContent:'center'}}>
                log in page
              </span>
              <form onSubmit={logInUser}>
                <input placeholder="E-mail" name="email" className="email" />
                <input placeholder="Password" type="password" className="password" name="password"/>
                <button type="submit" >Submit</button>
              </form>
            
                <span style={{color:"black", display:"flex", justifyContent:'center'}}>
                     Don't have an account?
                </span>
               
            
            <div style={{color:"white", display:"flex", justifyContent:'center'}}>
                <button onClick={toSignUp}>
                    <span>Sign up now</span>
                </button>
            </div>
             </div>
              

            
          </div>
        </div>
  );
}

export default LogIn;