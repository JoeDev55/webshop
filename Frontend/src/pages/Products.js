
import { useState } from "react";
import { useEffect } from "react";

import NavBar from '../NavBar';

function Products() {

 const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/productList')  // your backend endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="mainContainer">
      <header className="App-header">
        <NavBar/>
      </header>

      <div className="productsContainer" >

         <div className="products">
                {products.map(item => (
          <div key={item.id} className="productIndiv" >
            <div className="productImg">
              <img  src={`http://localhost:3000/${item.img}`} alt={item.name}  />  
            </div>
          <div className="productDesc">
            <h2>{item.name}</h2>
            <p>Price: {item.price} Ft</p>
          </div>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;