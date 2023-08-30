

import { OptionUrbanHome } from '../../components/Urban_or_Rural/OptionUrbanHome/OptionUrbanHome';
import { OptionRuralHome } from '../../components/Urban_or_Rural/OptionRuralHome/OptionRuralHome';

import banner_comercial from  '../../assets/banner_comercial.png';
import logo_intersept from '../../assets/logo.png';

import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { First_Page } from '../../components/First_Page/First_Page';
import { UrbanOrRural } from '../../components/Urban_or_Rural/UrbanOrRural';



export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setCurrentStep(1);
  };

  useEffect(() => {
    console.log("First_Page montado");
  
    return () => {
      console.log("First_Page desmontado");
    };
  }, []);
  

  const renderCurrentStep = () => {
    if (currentStep === 0) {
      return <First_Page onNext={handleChoice} />;
    }
    if (currentStep === 1) {
      switch (userChoice) {
        case 'residencia':
          return <UrbanOrRural 
                    onNext={value => {value}}
                    onBack={() => setCurrentStep(0)}
                 />;
        case 'casa_urbana':
          return <OptionUrbanHome 
              onNext={value => {value}} 
              onBack={() => setCurrentStep(0)}
          />;
        case 'casa_rural':
          return <OptionRuralHome />;
        default:
          return null;
      }
    }
    return null;
  };
  
  
  return (
    <form>
      <div className={styles.logo_intersept}>
        <img src={logo_intersept} alt="Logo da Intersept"/>
      </div>
      <div className={styles.container}>
        <div className={styles.progressBar}></div>
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
        {renderCurrentStep()}
      </div>
      <div className={styles.img_banner}>
        <img src={banner_comercial} alt="Banner Comercial"/>
      </div>
    </form>
  );
}
