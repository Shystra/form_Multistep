

import { OptionUrbanHome } from '../../components/Urban_or_Rural/OptionUrbanHome/OptionUrbanHome';
import { OptionRuralHome } from '../../components/Urban_or_Rural/OptionRuralHome/OptionRuralHome';

import banner_comercial from  '../../assets/banner_comercial.png';
import logo_intersept from '../../assets/logo.png';

import styles from './Home.module.css';
import { useState } from 'react';
import { First_Page } from '../../components/First_Page/First_Page';
import { Residence } from '../../components/Residence/Residence';



export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);


  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setCurrentStep(1);
  };



  

  return (
    <form >
        <div className={styles.logo_intersept}>
          <img src={logo_intersept}/>
        </div>
      <div className={styles.container}>
        <div className={styles.progressBar}>

          </div>
        {currentStep === 0 && (
          <>
            <div className={styles.progressOne}>
              <label className={styles.progressLabel}>0%</label>
            </div>
          <div className={styles.title_Container}>
            <h1 className={styles.title_Residencia}>Selecione o tipo de Proteção que você precisa:</h1>
          </div>
         

          

          </>




        )}
        


        {currentStep === 0 && <First_Page onNext={handleChoice}/>}
        {currentStep === 1 && userChoice === "residencia" && <Residence onNext={value => (value)}/>}
        {/* {currentStep === 1 && userChoice === "casa_urbana" && <Urban_or_Rural />} */}
        {currentStep === 1 && userChoice === "casa_urbana" && <OptionUrbanHome />}
        {currentStep === 1 && userChoice === "casa_rural" && <OptionRuralHome />}
        
      </div>
      
      <div className={styles.img_banner}>
          <img src={banner_comercial}/>
        </div>
    </form>
  );

}