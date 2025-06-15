import react from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MenuTitleChanger({menuButton = () => {},text1 = "Main text",className1, text2 = "Main text", className2}){
const [topOffset, setTopOffset] = useState('50%');
const [fontSize,setFontSize] = useState(150)
const [color,setColor]=useState()
const [menuColor,setMenuColor]=useState()
const [backgroundColor,setBackgroundColor]=useState()
//const [menuBackgroundColor,setMenuBackgroundColor]=useState()
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = Math.max(2, 50 - scrollY / 10); // from 50% down to 0%
      setTopOffset(`${newOffset}%`);
      const newSize = Math.max(50, 150 - scrollY /10)
            setFontSize(newSize)
      
      
      if (scrollY > 1100 || window.innerWidth <= 852 ) {
        setColor("#012001")
        setBackgroundColor("#fefae0")
        setMenuColor("#012001")
        //setMenuBackgroundColor("white")
      }
      else{
        setColor(null)
        setBackgroundColor(null)
        setMenuColor(null)
        //setMenuBackgroundColor(null)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
   <div>
    <button onClick={menuButton} className={className1}
        style={{
        
        zIndex:2,
        left: '5%',
        fontSize:'20px',
        color:menuColor,
        //backgroundColor:menuBackgroundColor,
        //background:menuBackgroundColor
        }}>{text1}
    </button>
    <h1
      style={{
        zIndex:1,
        fontSize: `${fontSize}px`,
        position: 'fixed',
        top: topOffset,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'top 0.2s ease-out',
        color:color,
        backgroundColor:backgroundColor,
      }} className={className2}
    >
      {text2}
      
    </h1>
     </div>
  );
  }
export default MenuTitleChanger;