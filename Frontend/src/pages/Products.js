
import {useState } from "react";
import { useEffect } from "react";
import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import { useNavigate } from "react-router";

function Products() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [shoppingList,setShoppingList] = useState([])
  const [category,setCategory]= useState("all")
  const [searchQuery,setSearchQuery] = useState('')
  const [favList,setFavList]=useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  //const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    
    const endpoints ={
      all: "http://localhost:3000/productList",
      fruit: "http://localhost:3000/fruitList",
      vegetables:"http://localhost:3000/vegetableList",
      meat:"http://localhost:3000/meatList",
      dairy:"http://localhost:3000/dairyList",
      specialty:"http://localhost:3000/specialtyList"
    }
    const endpoint = endpoints[category] || endpoints.all;


    fetch(endpoint)  // your backend endpoint
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
      
  }, [category]);

 useEffect(() => {
  console.log("Shopping list updated:", shoppingList);
}, [shoppingList]);

  
 
 
  function Add(item){
    
    /*const added = shoppingList.find(i=> i.product?._id === item._id)
    if (added) {
      //console.log(item._id)
      //console.log(item.name)
      const updated = shoppingList.map(i=> i.product?._id === item._id
      ? {...item, quantity: i.quantity + 1}
      :i)
      setShoppingList(updated)
    }
    else {
			setShoppingList([...shoppingList, {product: item, quantity: 1}]);
		}
    */
   
   
   const exists = shoppingList.find(i=> i.id === item.id)
   if (exists) {
    const updatedList = shoppingList.map(i =>
      i.id === item.id
        ? { ...i, quantity: (i.quantity || 1) + 1 }
        : i
        
    );
    setShoppingList(updatedList);
    console.log(item.quantity)
    setTotalPrice(totalPrice + item.price)
   }
   else {
    
    setShoppingList([...shoppingList,{...item,quantity: 1}]);
    console.log(item.quantity)
    setTotalPrice(totalPrice + item.price)
  }
   
    
   
  }
  function Remove(item){
    if (item.quantity <=0 || item.quantity === 1) {
      const removeItem = shoppingList.filter(i=> i.id !== item.id)
      setShoppingList(removeItem)
      console.log(item.quantity)
      setTotalPrice(totalPrice-item.price)
     
    }
    else if(item.quantity >1){
      const updatedList = shoppingList.map(i =>
      i.id === item.id
        ? { ...i, quantity: Math.max((i.quantity || 1) - 1 , 0)}
        : i
        
    );
    
    setShoppingList(updatedList);
    console.log(item.quantity)
    setTotalPrice(totalPrice-item.price)
    }
    //console.log(shoppingList)
  }
  function Clear(){
    setShoppingList([])
    setSearchQuery('')
  }
/*
  useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearchQuery(searchQuery);
  }, 300); // 300ms delay

  return () => {
    clearTimeout(handler);
  };
}, [searchQuery]);
*/
  useEffect(() => {

    if (searchQuery.trim() === "") {
      setSearchResults([]); // Clear search results
      return;
    }

      const endpoint =`http://localhost:3000/filteredProducts?q=${encodeURIComponent(searchQuery)}`;
      
      fetch(endpoint)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(err => console.error('Error fetching products:', err));
    }, [searchQuery]);


    const productsToDisplay =
    searchQuery.trim() !== ""
      ? searchResults
      : products;
    console.log('searchQuery:', searchQuery);
console.log('searchResults:', searchResults);

console.log('productsToDisplay:', productsToDisplay);
  function Favourite(item){
    setFavList(prevList=> [...prevList,item])
  }
const [isMenu,setIsMenu] = useState(false)


  
  return (
    <div className="mainContainerProducts">
      <header className="App-header">
        
      </header>
      <div className="nav">
        <MenuButton onClick={()=>setIsMenu(prev => !prev)} buttonText={isMenu ? "Close" : "Menu"} className={'menuButtonProducts'}/>
      {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
      </div>
      
      <div className="dividerContainer">
      <div className="searchBarContainer">
        
        <div className="searchBar">
          <input type="text" placeholder="Search" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
        </div>


        <div className="searchFilter">
          <button onClick={()=> setCategory("all")} >
            <p>Reset filters</p>
          </button>
          <button onClick={()=> setCategory("fruit")}>
            <p>Fruits</p>
          </button>
          <button onClick={()=> setCategory("vegetables")}>
            <p>Vegetables</p>
          </button>
          <button onClick={()=> setCategory("meat")}>
            <p>Meat</p>
          </button>
          <button onClick={()=> setCategory("dairy")}>
            <p>Dairy</p>
          </button>
          <button onClick={()=> setCategory("specialty")}>
            <p>Specialty</p>
          </button>
          
        </div>
    



      </div>
      

      <div className="productsContainer" >

         <div className="products">
                {productsToDisplay.map(item => (
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
        
        <ul className="list">
          
          {shoppingList.map(item=>(
            
          <li key={item.id}>
            
            
            
            <p>  {item.name}</p>
            <div className="amountBox">
            <div className="amountButton">
            <button  key={item.name} onClick={() => Remove(item)}>
              <p>-</p>
            </button>
            </div>
            <p id={item.id}>{item.quantity}</p>
            <div className="amountButton">
            <button key={item.id} onClick={() => Add(item)}>
              <p>+</p>
            </button>
            </div>
            </div>
          </li>
          
          )) 
            
          }
        </ul>
        
        <div className="listButtons">
          <div className="totalPrice">
            <p>Subtotal: </p>
            <p>{totalPrice}</p>
            
          </div>
          <button id="clearButton"  onClick={Clear}>
            <p>Clear shoppinglist</p>
          </button>
          <button id="checkoutButton" onClick={()=>{navigate('/checkout', {state: {shoppingList, totalPrice}})}}>
            <p>Checkout</p>
          </button>
        </div>
        
      </div>
      
      </div>
    </div>
  );
}

export default Products;