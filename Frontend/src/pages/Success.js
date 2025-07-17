import { useState,useEffect,useRef } from "react";

import { useNavigate } from "react-router";
import styles from './Success.module.css';
import approved from '../media/green_leaf_check_mark.jpg';
function Success(){
  const navigate = useNavigate()
    const [shippingInfo, setShippingInfo] = useState({});
    const hasSubmitted = useRef(false);
    const [shoppingList,setShoppingList] = useState()
    
    
  

  const handleSubmit = async (dataToSubmit) => {
    
        try {
      const res = await fetch('http://localhost:3000/orderInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        localStorage.removeItem('shippingInfo')
        
      } else {
        alert(data.message || 'Error submitting order');
      }
    } catch (error) {
      console.error(error);
      alert('Network error');
    }
   
  };

  useEffect(() => {
    const savedInfo = localStorage.getItem("shippingInfo");
    const savedList = localStorage.getItem("shoppingList");
    if (savedInfo && !hasSubmitted.current) {
      const parsedInfo = JSON.parse(savedInfo);
      const parsedList = JSON.parse(savedList)
      setShippingInfo(parsedInfo);
      setShoppingList(parsedList)
        


      const dataToSubmit = { ...parsedInfo, items: parsedList };
      console.log(dataToSubmit)
      handleSubmit(dataToSubmit);
       hasSubmitted.current = true;
    }
  }, []);

return(
    <div className={styles.mainSuccess}>
        
        <div className={styles.successText}>
            <div className={styles.thankYou}>
            Thank you!
            </div>
            <div>
              <img className={styles.img} src={approved}/>
            </div>
            <div className={styles.order}>
              Your order was succesful
            </div>
            <div className={styles.email}>
              We sent an order confirmation e-mail to your address
            </div>
       </div>

       <div className={styles.buttonContainer}>
        <button onClick={()=>navigate('/')}>
          Home
        </button>
       </div>

    </div>
)
}
export default Success;