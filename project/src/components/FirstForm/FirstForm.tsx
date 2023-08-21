import { useState } from 'react';
import styles from './FirstForm.module.css';





export const FirstForm = ({ onNext }:any) => {
  
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


  

    return (
      <form className={styles.containerForm}>
          
          <div className={styles.buttonsWrapper}>
            <div className={styles.casaUrbana}>
              
              <button className={styles.casaUrbanaButton}
              onClick={() => onNext("urbana")}
              >Casa em área Urbana</button>
            
            </div>
            
            <div className={styles.casaRural}>
              
              <button className={styles.casaRuralButton}
              onClick={() => onNext("rural")}
              > Casa em área Rural</button>
            
            </div>
    
            {/* <div className={styles.prosseguir}>
            
            <button className={styles.prosseguirButton}
     
                  onClick={() => {
                  
                    onNext()
                  }}
                  
              >Prosseguir</button>
              <div className={styles.prosseguirSobre}>
                <FcNext />
                
              </div>
            </div> */}
          </div>
        </form> 
      );
    };