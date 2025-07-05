import './ProductOverlay.css'
function ProductOverlay({onClose, item}){
    if(!item) return null
return(
    <div className="main">
        <button onClick={onClose} className='closeButton'>✕</button>
        <div className="row">
            <div className="image">
                <img src={`http://localhost:3000/${item.img}`}/>
            </div>
            <div className="description">
                <span>{item.name}</span>
            </div>
        </div>


        <div className="row">
            <div >
               <span>{item.amount}</span> 
            </div>
            <div>
                mennyiseg
            </div>
        </div>


        <div className="row">
            Add button
        </div>
    </div>
)
}
export default ProductOverlay;