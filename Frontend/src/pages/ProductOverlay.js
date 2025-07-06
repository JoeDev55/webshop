import { useState } from 'react';
import styles from './ProductOverlay.module.css'
function ProductOverlay({onClose, item, onClick}){
    const [itemCounter,setItemCounter] = useState(1);
    function Add(){
        setItemCounter(itemCounter + 1)
        item.quantity = itemCounter
        }
    function Remove(){
        if (itemCounter > 1) {
            setItemCounter(itemCounter - 1)
        }
        
    }
    if(!item) return null
    
return(
    <div className={styles.main}>
        <button onClick={onClose} className={styles.closeButton}>✕</button>
        <div className={styles.imgContainer}>
            <div className={styles.image}>
                <img src={`http://localhost:3000/${item.img}`} alt={item.name}/>
            </div>
        </div>
        <div className={styles.descContainer}>
            <div className={styles.name}>
                <span>{item.name}</span>
            </div>
            
            <div className={styles.amountContainer}>
            
            
            <div className={styles.amountBox}>

            <div className={styles.amountButton}>
            <button  key={item.name} onClick={()=>Remove()} >
              <span>-</span>
            </button>
            </div>

            <span id={item.id}>{itemCounter}</span>

            <div className={styles.amountButton}>
            <button key={item.id} onClick={()=>Add()}>
              <span>+</span>
            </button>
            </div>

            
            </div>
            <div className={styles.price}>
            <span>{item.price*itemCounter}</span>
        </div>
            </div>
        
        
        
        


        <div className={styles.add}>
            <button onClick={() => {onClick(itemCounter);}}>
                
                <span>Add to cart</span>
            </button>
            
        </div>
        </div>
    
        </div>


        
)
}
export default ProductOverlay;