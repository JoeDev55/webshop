
import { useState } from "react";
import { useEffect } from "react";

import NavBar from '../NavBar';

function Products() {

  const [products, setProducts] = useState([])
  const [shoppingList,setShoppingList] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/productList')  // your backend endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  function Add(item){
    setShoppingList(prevList => [...prevList, item])
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
            <div className="productImg">
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
        
          {shoppingList.map(item=>(
            <ul>
          <li><p>{item.name}</p></li>
          </ul>
          )) 
            
          }
        
      </div>
      </div>
    </div>
  );
}

export default Products;