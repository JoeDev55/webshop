import react from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MenuTitleChanger({text = "", className}){
const [topOffset, setTopOffset] = useState('50%');
const [fontSize,setFontSize] = useState(150)
const [color,setColor]=useState()
const [backgroundColor,setBackgroundColor]=useState()
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = Math.max(2, 50 - scrollY / 10); 
      setTopOffset(`${newOffset}%`);
      const newSize = Math.max(50, 150 - scrollY /10)
            setFontSize(newSize)
      if (scrollY > 1100 || window.innerWidth <= 852 ) {
        setColor("#012001")
        setBackgroundColor("#fefae0")
      }
      else{
        setColor(null)
        setBackgroundColor(null)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div>
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
      }} className={className}
    >
      {text}
      
    </h1>
     </div>
  );
  }
export default MenuTitleChanger;