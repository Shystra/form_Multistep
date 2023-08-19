import styles from './Button.module.css';
import {FcNext} from 'react-icons/fc';



export const Button = () => {
    return (
        <div className={styles.buttonHomeResidencia}>
            <div className={styles.casaUrbana}>
                <button className={styles.casaUrbanaButton}>Casa em área Urbana</button>
            </div>
            <div className={styles.casaRural}>
                <button className={styles.casaRuralButton}> Casa em área Rural</button>
            </div>

            
            <div className={styles.prosseguir}>
                    <button className={styles.prosseguirButton}>Prosseguir </button>
                <div className={styles.prosseguirSobre}><FcNext/></div>
                
            </div>


        </div>
    )

}