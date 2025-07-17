import { useState, useEffect, useRef, useContext } from "react"
import { useNavigate } from "react-router"
import { UserContext } from "./UserContext"
function Cart({ shoppingList = [], Add, Remove, RemoveItem, toggleCart, moveCart }){
 const navigate = useNavigate()
 const {totalPrice} = useContext(UserContext) 

return(
<div>
    <button onClick={toggleCart} style={{
        position: 'fixed', 
        top: '3.5%',
        right: '3%',
        border:'none',
        color:'white' ,
        backgroundColor:'transparent',
        fontSize:'large',
        fontFamily: 'Raleway',
        transition: 'background-color 0.5s ease',
        cursor:'pointer',
        zIndex:'999'
    }}>
        <span style={{zIndex:'1000'}}>{shoppingList.length === 0 ? "Cart":"Cart("+shoppingList.length+")"}</span>
    </button>
    <div className="listContainer" style={{
        position:'fixed',
        right:moveCart,
        top:'0',
        width:'30%',
        transition: "right 0.5s ease-in-out",
        zIndex:'1000'

    }}>
        <div className="listHeader" style={{display:'flex', flexDirection:'row'}}>
          <span style={{display:'flex'}}>Your list:</span>
          <button onClick={toggleCart} style={{
            justifyContent:'right',
            border:'none',
            color: '#fefae0',
            backgroundColor:'#07644B' ,
            fontSize:'large',
            fontFamily: 'Raleway',
            display:'flex',
            flex:'1',
            paddingRight:'11%',
            paddingTop:'0%',
            cursor:'pointer'
          }}>
            <span>Close</span>
          </button>
        </div>
        {shoppingList.length === 0 ? <div className="list" style={{margin:'auto', overflowY:'hidden',marginTop:'50%'}}>Your list is empty</div> : 
        <ul className="list">
          
          {shoppingList.map(item=>(
            
          <li key={item.id}>
            
            <div key={item.name} className="namePrice">

            <div className="listItemName">
              <p>  {item.name}</p>
            </div>

            <div className="itemPrice">
              <span>{item.price*item.quantity} Ft</span>
            </div>

            </div>
            <div className="amountRemove">
            <div className="amountBox">

            <div className="amountButton">
            <button  key={item.name} onClick={() => Remove(item)}>
              <span>-</span>
            </button>
            </div>

            <span id={item.id}>{item.quantity}</span>

            <div className="amountButton">
            <button key={item.id} disabled={item.quantity>=35} onClick={() => {Add(item,1)}}>
              <span>+</span>
            </button>
            </div>

            
            </div>
            <div className="removeButton">
              <button key={item.id} onClick={()=>{RemoveItem(item,item.quantity)}}>
                <span>✕</span>
              </button>
            
            </div>
            </div>
            
          </li>
          
          
          )) 
            
          }
        </ul>
        }
        <div className="listInfo">
          <div className="totalPrice">
            <p>Subtotal:</p>
            <p>{totalPrice} Ft</p>
            
          </div>
          <div className="listButtons">
          
          <button id="checkoutButton" disabled={shoppingList.length === 0} onClick={()=>{navigate('/checkout', {state: {shoppingList, totalPrice}})}}>
            <p>Checkout</p>
          </button>
          </div>
        </div>
        
      </div>
      </div>
)
}
export default Cart