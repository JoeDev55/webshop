import react, { useEffect, useState } from "react";
import NavBar from '../NavBar';
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function MyProfile() {
  const signedIn=false
  const navigate = useNavigate()
  function logIn(){
    navigate('/logIn')
  }
  function signUp(){
    navigate('/signUp')
  }
  function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    window.location.reload()
  }
  useEffect(()=>{ async function fetchUserData(){
    const token = localStorage.getItem('token')
    if (!token) {
      console.log('no token found')
      return navigate('/LogIn')
    }
    try {
      const response = await fetch('http://localhost:3000/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
      navigate('/logIn');
    }
  }
  fetchUserData()
  },[navigate])
  const location = useLocation()
  //const email = location.state?.email;
  const [user,setUser] = useState()
  const storedEmail = localStorage.getItem('email');
  
 return (
    <div className="mainContainer">
      <header className="App-header">
        <NavBar/>
      </header>

      <div className="profileContainer" >
        
        <div className="signInStatus">
                Signed in as {user?.firstName}
                hello 
                <div>
                  <button onClick={logOut}>log out</button>
                </div>
        </div>
      </div>
    </div>
  );
  }

 

export default MyProfile;