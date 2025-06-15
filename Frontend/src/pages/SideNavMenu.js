import react from "react";
function SideNavMenu({menuButton = () => {},menuButtonText = "Text",className1}){
    return(
        <div>
    <button onClick={menuButton} className={className1}
        style={{
        
        zIndex:2,
        left: '5%',
        top:'5%',
        fontSize:'20px',
        color:'#012001',
        //backgroundColor:menuBackgroundColor,
        //background:menuBackgroundColor
        }}>{menuButtonText}
    </button>
    </div>
    )
}
export default SideNavMenu;