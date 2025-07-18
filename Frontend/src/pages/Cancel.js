import styles from './Cancel.module.css'
import cross from '../media/cross.png';
import { useNavigate } from 'react-router';
function Cancel(){
    const navigate = useNavigate()
    return(
        <div className={styles.mainContainer}>
           
            <div className={styles.mainText}>
                <span>
                    Payment cancelled
                </span>
                
            </div>
             <div className={styles.image}>
                <img src={cross} alt='cross'/>
            </div>
            <div className={styles.cancelled}>
                <button className={styles.cancelledButton} onClick={()=>navigate('/')}>
                    <span>
                        Return to the Homepage
                    </span>
                </button>
            </div>
            
        </div>
    )
}
export default Cancel;