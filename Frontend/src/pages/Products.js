
import { useState } from "react";
import { useEffect } from "react";

import NavBar from '../NavBar';

function Products() {

  const [products, setProducts] = useState([])
  const [shoppingList,setShoppingList] = useState([])
  var [itemCounter,setItemCounter] = useState(1)
  useEffect(() => {
    fetch('http://localhost:3000/productList')  // your backend endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  function Add(item){
    if (shoppingList.length === 0 ) {
      setShoppingList(prevList => [...prevList, item])
    }
    else if(shoppingList.includes(item)){
      console.log(item.name)
      setItemCounter(prevCount => prevCount + 1)
    }
  }
  function ShopPlus(item){
    
      setItemCounter(prevCount => prevCount + 1)
    
    
  }
  function ShopMinus(item){
    if (shoppingList.length >= 0) {
      if (setItemCounter === 0) {
        setShoppingList(prevList => prevList.filter(item => item != item));
      }
      setItemCounter(prevCount => prevCount - 1)
    }
    
    
  }
  function Clear(){
    setShoppingList([])
    setItemCounter(0)
  }
  
  
  return (
    <div className="mainContainerProducts">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="dividerContainer">
      <div className="searchBarContainer">
        
        <div className="searchBar">
          <input type="text"></input>
        
          <button>
            <p>🔍</p>
          </button>
        </div>
        <div className="searchFilter">
          <button >
            <p>Fruits</p>
          </button>
          <button >
            <p>Vegetables</p>
          </button>
          <button >
            <p>Meat</p>
          </button>
          <button >
            <p>Dairy</p>
          </button>
        </div>
    



      </div>
      

      <div className="productsContainer" >

         <div className="products">
                {products.map(item => (
          <button key={item.id} className="productIndiv" onClick={()=> Add(item)}>
            <div key={item.img} className="productImg">
              <img  src={`http://localhost:3000/${item.img}`} alt={item.name}  />  
            </div>
          <div className="productDesc">
            <h4>{item.name}</h4>
            <p>{item.price} Ft</p>
          </div>
          </button>
            ))}
        </div>
      </div>
      <div className="listContainer">
        <ul>
          {shoppingList.map(item=>(
            
          <li>
            <p key={item.name} className="counter">{itemCounter}x </p>
            <p>{item.name}</p>
            <button key={item.id} onClick={ShopMinus}>
              <p>-</p>
            </button>
            <button key={item.id} onClick={ShopPlus}>
              <p>+</p>
            </button>
          </li>
          
          )) 
            
          }
        </ul>
        <div>
          <button onClick={Clear}>
            <p>Clear all</p>
          </button>
        </div>
        
      </div>
      
      </div>
    </div>
  );
}

export default Products;