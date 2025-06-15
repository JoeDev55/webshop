import react, { useEffect } from "react";
function MenuSide(text="Menu text"){
    useEffect(()=>{
        
    })
    const scrollY = window.scrollY
return(
    <button className="menuButton">
        <span>{text}</span>
    </button>
)
}
export default MenuSide;