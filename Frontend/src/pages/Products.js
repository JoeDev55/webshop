
import {useState, useContext } from "react";
import { useEffect } from "react";
import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import { useNavigate } from "react-router";
import './Products.css';
import upArrow from '../media/up-arrow.png';
import leaf from '../media/leaf.png';
import Cart from "./Cart";
import ProductOverlay from "./ProductOverlay";
import { UserContext } from "./UserContext";

function Products() {
  const{totalPrice,setTotalPrice,shoppingList,setShoppingList} = useContext(UserContext)
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  
  const [category,setCategory]= useState("all")
  const [searchQuery,setSearchQuery] = useState('')
  const [favList,setFavList]=useState([])
  
  const [listVisible,setListVisible] = useState(false)
  const [filtersVisible,setFiltersVisible] = useState(false)
  //const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const [searchResults, setSearchResults] = useState([]);
  const [moveCart,setMoveCart] = useState()
  
  
  useEffect(() => {
    
    const endpoints ={
      all: "http://localhost:3000/productList",
      fruit: "http://localhost:3000/fruitList",
      vegetable:"http://localhost:3000/vegetableList",
      meat:"http://localhost:3000/meatList",
      dairy:"http://localhost:3000/dairyList",
      specialty:"http://localhost:3000/specialtyList"
    }
    const endpoint = endpoints[category] || endpoints.all;


    fetch(endpoint)  
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
      
  }, [category]);

 useEffect(() => {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
  
}, [shoppingList]);
 const toggleCart = () => {
    setMoveCart(prev=> !prev)
}
  function Add(item, amount){
   const exists = shoppingList.find(i=> i.id === item.id)
   
   if (exists) {
    if ( exists.quantity > 35 || exists.quantity + amount > 35) {
      setShowOverlay(false)
      const maxQtyList = shoppingList.map(i =>
      i.id === item.id
        ? { ...i, quantity: (35)}
        : i)
        setShoppingList(maxQtyList)
      }
    else{
      const updatedList = shoppingList.map(i =>
      i.id === item.id
        ? { ...i, quantity: (i.quantity || 1) + amount }
        : i
        
    );
    setShoppingList(updatedList);
    console.log(item.quantity)
    console.log('item type',item.quantityType)
    setTotalPrice(totalPrice + amount * item.price)
    }
    
   }
   
   else{
    
    setShoppingList([...shoppingList,{...item,quantity: amount}]);
    console.log(item.quantity)
    setTotalPrice(totalPrice + amount * item.price)
  }
   
    
   
  }
  function Remove(item){
    if (shoppingList.length === 1 && item.quantity === 1) {
       toggleCart()
    }
    if (item.quantity <=0 || item.quantity === 1) {
      const removeItem = shoppingList.filter(i=> i.id !== item.id)
      setShoppingList(removeItem)
      console.log(item.quantity)
      if (totalPrice !== 0) {
        setTotalPrice(totalPrice-item.price)
      }
      
     
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

  }
  
  function RemoveItem(item,amount){
    const removeItem = shoppingList.filter(i=> i.id !== item.id)
      setShoppingList(removeItem)
      console.log(item.quantity)
      setTotalPrice(totalPrice-item.price * amount)
  }

  useEffect(() => {

    if (searchQuery.trim() === "") {
      setSearchResults([]); 
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

const [showButtonTop,setShowButtonTop] = useState(false)
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtonTop(true);
      } else {
        setShowButtonTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


const [showOverlay,setShowOverlay] = useState(false)
const [selectedItem,setSelectedItem] = useState(null)




  return (
    <div className="mainContainerProducts">
      <header className="App-header">
        
      </header>
      
      <div className="nav">
        <MenuButton onClick={()=>setIsMenu(prev => !prev)} clickEffect={true} buttonText={isMenu ? "✕" : "Menu"} className={'menuButtonProducts'}/>
      {isMenu && <SideNav  onClose={()=>setIsMenu(prev => !prev)}/>}
      </div>
      <div className="pageTitle">
        <button onClick={()=>navigate('/')}>
          <img src={leaf}/>
        <span>eGrocer</span>
        
        </button>
        <div className="searchBar">
          <input type="text" placeholder="Search" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
        </div>
      </div>
      
      
      <div className="dividerContainer">
      <div className="searchBarContainer">
        
        


        <div className="searchFilter">
          <button onClick={()=> setCategory("all")} >
            <p>All</p>
          </button>
          <button onClick={()=> setCategory("fruit")}>
            <p>Fruits</p>
          </button>
          <button onClick={()=> setCategory("vegetable")}>
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
          
          <button key={item.id} className="productIndiv" onClick={()=>{setShowOverlay(true); setSelectedItem(item)}}>
            <div key={item.img} className="productImg">
              <img  src={`http://localhost:3000/${item.img}`} alt={item.name}  />  
            </div>
          <div className="productDesc">
            <h1>{item.name}</h1>
            <p>{item.price} Ft/{item.quantityType}</p>
          </div>
          </button>
            ))}
           
            {showOverlay && (
              <>
              <div 
      className="overlayBackdrop" 
      onClick={() => setShowOverlay(false)}
    />
    <ProductOverlay  item={selectedItem} onClose={()=>setShowOverlay(false)} onClick={(amount)=>{Add(selectedItem,amount); setShowOverlay(false) }}/>
      </>)}
      <Cart
      shoppingList={shoppingList}
      totalPrice={totalPrice}
      Add={Add}
      Remove={Remove}
      RemoveItem={RemoveItem}
      toggleCart={toggleCart} 
      moveCart={moveCart ? "0px" : "-900px"}
      />
        </div>
      </div>
     
       {showButtonTop && (
        <button
          onClick={scrollToTop}
          className="topButton"
        >
          <img src={upArrow}/>
        </button>
      )}
      
     
      </div>
    </div>
  );
}

export default Products;