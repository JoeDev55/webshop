import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import '../styles.css';
function Checkout(){
    const [items,setItems] = useState([])
    const [isMenu,setIsMenu] = useState(false)
    const location = useLocation()
    const shoppingList = location.state?.shoppingList || []
    const totalPrice = location.state?.totalPrice || []
    const [chosenDelivery,setChosenDelivery] = useState()
    return(
        <div className="mainContainerCheckout">
            <div className="nav">
                <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={'menuButtonCheckout'}/>
                {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
            </div>
            
            <div className="checkoutItems">
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
            <div className="totalPrice2">
              <span>Total : {chosenDelivery === 'store' ? totalPrice : totalPrice + 10} $</span>
              <p>Delivery  fee: {chosenDelivery === 'store' ? '0' : '10'} $</p>
            </div>
             
            {/*
            <div className="deliveryInfo">
                <div className="title">
                    <p>Delivery options:</p>
                </div>
                
                <div className="options">
                <button onClick={()=>setChosenDelivery('store')}>
                    <p>Pick up in store</p>
                </button>
                <button onClick={()=>setChosenDelivery('delivery')}>
                    <p>Delivery</p>
                </button>
                
                
                </div>
                {chosenDelivery ==='delivery' ? 
                <div className="addressForm">
                    <form className="deliveryForm">
                        <input placeholder="Zip code" name="zipCode"/>
                        <input placeholder="Country" name="country"/>
                        <input placeholder="City" name="city"/>
                        <input placeholder="Address" name="address"/>
                    </form>
                </div> 
                : 
                <div className="pickup">
                    <p>Address: 171 Market St. Brooklyn, New York 11233</p>
                
                </div> }
                
                
            </div>
            <div className="checkoutTotal">

            </div>
            */}
            <div className="shippingInfo">
                <div className="email">
                    <input placeholder="E-mail"/>
                </div>
                <div className="namesCityZ">
                    <input placeholder="First name"/>
                
                    <input placeholder="Last name"/>
                </div>
                <div className="country">
                    <input  placeholder="Country" value={'Hungary'}/>
                </div>
                <div className="address">
                    <input placeholder="Address"/>
                </div>
                <div className="apartment">
                    <input placeholder="Apartment"/>
                </div>
                <div className="namesCityZ">
                    <input placeholder="City"/>
                
                    <input placeholder="Zip code"/>
                </div>
                <div className="phone">
                    <input placeholder="Phone"/>
                </div>
            </div>
        </div>
    )
}
export default Checkout;