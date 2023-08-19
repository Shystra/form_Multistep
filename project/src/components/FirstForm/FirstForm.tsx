import React, { useEffect, useState } from 'react';
import styles from './FirstForm.module.css';
import { FcNext } from 'react-icons/fc';
import { useMultistepForm } from '../../Hooks/useForme';
import { SecondaryForm } from '../SecondForm/SecondForm';



export const FirstForm = ({ onNext }:any) => {
  
  // const { 
  //   steps, 
  //   currentStepIndex, 
  //   step, 
  //   isFirstStep, 
  //   next } = useMultistepForm([
    
  //   <SecondForm />,
    
  // ]);

  // const [changeTagProgress, setChangeTagProgress] = useState(false);

  // useEffect(() => {
  //     document.body.classList.remove('progressOne');
    
  //   }, [changeTagProgress]);



    return (
      <form className={styles.containerForm}>
          
          <div className={styles.buttonHomeResidencia}>
            <div className={styles.casaUrbana}>
              <button className={styles.casaUrbanaButton}>Casa em área Urbana</button>
            </div>
            <div className={styles.casaRural}>
              <button className={styles.casaRuralButton}> Casa em área Rural</button>
            </div>
    
            <div className={styles.prosseguir}>
            
            <button className={styles.prosseguirButton}
                  // onClick={onNext}
                  onClick={() => {
                    // setChangeTagProgress(false);
                    onNext()
                  }}
                  
              >Prosseguir</button>
              <div className={styles.prosseguirSobre}>
                <FcNext />
              </div>
            </div>
          </div>







          {/* <div>
          {currentStepIndex + 1} / {steps.length}
          </div>
          {step} */}
        





        </form> 
      );
    };