import { createContext, useEffect, useState } from "react";


export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [totalPrice,setTotalPrice] = useState(()=>{
    const subtotal = localStorage.getItem("totalPrice")
    return subtotal ? JSON.parse(subtotal) : 0
  })
  const [shoppingList,setShoppingList] = useState(()=>{
    const savedList = localStorage.getItem("shoppingList")
    return savedList ? JSON.parse(savedList) : []
  })
const [shippingInfo,setShippingInfo] = useState(()=>{
    const savedInfo = localStorage.getItem("shippingInfo")
    return savedInfo ? JSON.parse(savedInfo) : []
  })
 
  

  useEffect(() => {
    
    if (token) {
      fetchUserProfile(token);
      
    }
    else {
    setLoading(true);
  }
  }, [token]);



useEffect(() => {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
}, [shoppingList,totalPrice]);

  const fetchUserProfile = async (token) => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3000/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error("Failed to fetch user");
      const userInfo = await response.json();
      setUser(userInfo);
    } catch (error) {
      console.error("Error fetching user:", error);
      logout();
    }
    finally{
      setLoading(false)
    }
  };

  const logIn = (userInfo, receivedToken) => {
    localStorage.setItem("token", receivedToken);
    setToken(receivedToken);
    setUser(userInfo)
    setLoading(true)
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    setLoading(false)
  };

  return (
    <UserContext.Provider value={{ user, token, logIn, logout, loading, shoppingList, setShoppingList,totalPrice, setTotalPrice, shippingInfo,setShippingInfo}}>
      {children}
    </UserContext.Provider>
  );
};
