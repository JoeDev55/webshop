import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import styles from './Checkout.module.css';
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "./UserContext";
function Checkout(){
    const [items,setItems] = useState([])
    const [isMenu,setIsMenu] = useState(false)
    const location = useLocation()
    
    const totalPrice = location.state?.totalPrice || []
    const [chosenDelivery,setChosenDelivery] = useState()
    const stripePromise = loadStripe("pk_test_51RjHMTPuPtlRRZz1JGXKSdr1RcG1Yg70r1Qz42x19i7P7x35CWWqWnXPXiRY8qSEISg0ahUGXzio0ygAzgGVDyTj00eUnc59lB")
    const {shoppingList,shippingInfo,setShippingInfo} = useContext(UserContext)

    const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'Hungary',
    address: '',
    apartment: '',
    city: '',
    zipCode: '',
    phone: ''
    })
    const [formValid,setFormValid] = useState(false)
    const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  };
  
  
    

  const handleCheckout = async () => {
    
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );
  if (isFormValid) {
      setShippingInfo(formData)
      localStorage.setItem("shippingInfo", JSON.stringify(formData))
      const stripe = await stripePromise;
  
  const response = await fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cartItems: shoppingList }),
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error(result.error.message);
  }
    } 
  else{
    alert("please fill out all the fields")
  }


  
};

  

    return(
        <div className={styles.mainContainerCheckout}>
            <div className={styles.nav}>
                <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={styles.menuButtonCheckout}/>
                {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
            </div>
            <div className={styles.centerDiv}>
            <div className={styles.itemInfo}>
            <div className={styles.checkoutItems}>
                <ul>
                {shoppingList.map(item=>(
                    <li key={item.id}>
                        <img src={`http://localhost:3000/${item.img}`} style={{width:'100px', height:'100px'}}/>
                        <div>
                        <p>{item.quantity}x</p>
                        <p>{item.name} </p>
                        <p>{item.price * item.quantity}</p>
                        </div>
                    </li>
                ))}
                </ul>
                
            </div>
            <div className={styles.totalPrice2}>
              <span>Total : {chosenDelivery === 'store' ? totalPrice : totalPrice + 10} $</span>
              <p>Delivery  fee: {chosenDelivery === 'store' ? '0' : '10'} $</p>
            </div>
            </div>
            
            <div className={styles.shippingInfo}>
        <div className={styles.email}>
          <input name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.namesCityZ}>
          <input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} />
          <input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className={styles.country}>
          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        </div>
        <div className={styles.address}>
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        </div>
        <div className={styles.apartment}>
          <input name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} />
        </div>
        <div className={styles.namesCityZ}>
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input name="zipCode" placeholder="Zip code" value={formData.zipCode} onChange={handleChange} />
        </div>
        <div className={styles.phone}>
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button className={styles.submitButton}  onClick={handleCheckout}>Place order</button>
        
      </div>
      </div>
        </div>
    )
}
export default Checkout;