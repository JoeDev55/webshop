import { useState,useEffect } from "react";
function MenuButton({onClick,buttonText='',className, scrollEffect = false, clickEffect = false}){
    const [color,setColor]=useState()
    const [isClicked,setIsClicked] = useState(false)
    useEffect(() => {
    if (!scrollEffect) return
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 1100 || window.innerWidth <= 852 ) {
            setColor("#012001")
          }
          else{
            setColor('white')
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      const handleClick = (e) =>{
        const scrollY = window.scrollY;
      if (clickEffect &&  scrollY < 1100){
         setIsClicked(prev=>!prev)
         setColor((prevColor)=>
      isClicked ? 'white' : "#012001"
         )
      }
      if (onClick) {
        onClick(e)
      }
    }
return(
    <button style={{color}} className={className} onClick={handleClick}>
        {buttonText}
    </button>
)
}
export default MenuButton;