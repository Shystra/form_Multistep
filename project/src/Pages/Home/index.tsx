

import { FirstForm } from '../../components/FirstForm/FirstForm';
import { OptionUrbanHome } from '../../components/OptionUrbanHome/OptionUrbanHome';
import { OptionRuralHome } from '../../components/OptionRuralHome/OptionRuralHome';

import banner_comercial from  '../../assets/banner_comercial.png';
import logo_intersept from '../../assets/logo.png';

import styles from './Home.module.css';
import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../Hooks/useForme';



export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);


  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setCurrentStep(1);
  };



  

  return (
    <form >
        {/* <div className={styles.logo_intersept}>
          <img src={logo_intersept}/>
        </div> */}
      <div className={styles.container}>
        {currentStep === 0 && (
            <>
          <div className={styles.progressBar}>
            <div className={styles.progressOne}>
              <label className={styles.progressLabel}>10%</label>
            </div>
          <div className={styles.title_Container}>
            <h1 className={styles.title_Residencia}>Como é a sua Residência?</h1>
          </div>
          </div>
          </>
        )}
        {currentStep === 0 && <FirstForm onNext={handleChoice} />}

        {/* {currentStep === 0 && (
        )} */}
  
        {currentStep === 1 && userChoice === "casa_urbana" && <OptionUrbanHome />}
        {currentStep === 1 && userChoice === "casa_rural" && <OptionRuralHome />}
        
      </div>
      <div className={styles.img_banner}>
          <img src={banner_comercial}/>
        </div>
    </form>
  );

}