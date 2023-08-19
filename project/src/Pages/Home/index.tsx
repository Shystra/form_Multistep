

import { useMultistepForm } from '../../Hooks/useForme';
import { FirstForm } from '../../components/FirstForm/FirstForm';
import { SecondaryForm } from '../../components/SecondForm/SecondForm';
import styles from './Home.module.css'; // Importando os estilos
import { useState, useEffect } from 'react';


export function Home() {
  

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };


  



  return (
      
      
         
    <form>
       
        <div className={styles.container}>
          <div className={styles.progressBar}>
            <div className={styles.progressOne}>
                    <label className={styles.progressLabel}>10%</label>
            </div>
            
            <div className={styles.title_Container}>
                <h1 className={styles.title_Residencia}>Como é a sua Residência?</h1>
            </div>



            {currentStep === 0 && <FirstForm onNext={handleNext} />}
            
            

            

          
        
            
            {currentStep === 1 && <SecondaryForm />} 
        </div>
      </div>
    </form>



  )

}