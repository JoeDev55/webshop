import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router"
function Cart({ shoppingList = [], totalPrice, Add, Remove, RemoveItem, toggleCart, moveCart }){
 const navigate = useNavigate()

  
return(
<div>
    <button onClick={toggleCart} style={{
        position: 'fixed', 
        top: '3.5%',
        right: '3%',
        border:'none',
        color:'#1012001' ,
        backgroundColor:'transparent',
        fontSize:'large',
        fontFamily: 'Raleway',
        transition: 'background-color 0.5s ease',
        cursor:'pointer',
        zIndex:'999'
    }}>
        <span style={{zIndex:'1000'}}>Cart</span>
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
            backgroundColor:'#012001' ,
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
        <ul className="list">
          
          {shoppingList.map(item=>(
            
          <li key={item.id}>
            
            <div key={item.name} className="namePrice">

            <div className="listItemName">
              <p>  {item.name}</p>
            </div>

            <div className="itemPrice">
              <span>{item.price*item.quantity}Ft</span>
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
            <button key={item.id} onClick={() => Add(item,1)}>
              <span>+</span>
            </button>
            </div>

            
            </div>
            <div className="removeButton">
              <button key={item.id} onClick={()=>{RemoveItem(item,1)}}>
                <span>✕</span>
              </button>
            
            </div>
            </div>
            
          </li>
          
          
          )) 
            
          }
        </ul>
        
        <div className="listInfo">
          <div className="totalPrice">
            <p>Subtotal:</p>
            <p>{totalPrice} Ft</p>
            
          </div>
          <div className="listButtons">
          
          <button id="checkoutButton" onClick={()=>{navigate('/checkout', {state: {shoppingList, totalPrice}})}}>
            <p>Checkout</p>
          </button>
          </div>
        </div>
        
      </div>
      </div>
)
}
export default Cart