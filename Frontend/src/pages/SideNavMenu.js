import react from "react";
function SideNavMenu({onClick,buttonText = "Menu",className1}){
    
    return(
        <div>
    <button onClick={onClick} className={className1}
        style={{
        
        zIndex:2,
        left: '5%',
        top:'5%',
        fontSize:'20px',
        color:'#012001',
        //backgroundColor:menuBackgroundColor,
        //background:menuBackgroundColor
        }}>{buttonText}
    </button>
    </div>
    )
}
export default SideNavMenu;