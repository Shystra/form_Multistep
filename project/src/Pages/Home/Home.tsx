
import banner_comercial from  '../../assets/banner_comercial.png';
import logo_intersept from '../../assets/logo.png';

import styles from './Home.module.css';
import { useState } from 'react';
import { First_Page } from './First_Page/First_Page';
import { UrbanOrRural } from '../../components/Urban_or_Rural/UrbanOrRural';
import { Company } from '../../components/Company/Company';
import { Townhouse } from '../../components/Townhouse/Townhouse';

import { BsYoutube } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';





export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setCurrentStep(1);
  };
  

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
        case 'empresa_comercio':
          return <Company 
              onNext={value => {value}} 
              onBack={() => setCurrentStep(0)}
          />;
        case 'condominio':
          return <Townhouse 
            onNext={value => {value}}
            onBack={() => setCurrentStep(0)}
          />;
        default:
          return null;
      }
    }
    return null;
  };



  const linkIntersept = "https://www.intersept.com.br/";
  const linkInstagram = "https://www.instagram.com/grupointersept/";
  const linkFacebook  = "https://www.facebook.com/InterseptSeguranca";
  const linkYoutube   = "https://www.youtube.com/@interseptbr";
  const linkLinkedin  = "https://www.linkedin.com/company/grupo-intersept/";
  
  
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


      <div className={styles.footer_intersept}>
        <p>Siga a 
          <span className={styles.black_intersept}> 
            <a href={linkIntersept}> Intersept</a> 
          </span> nas redes sociais
        </p>
      </div>



      <div className={styles.icons}>
        <a href={linkFacebook} target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
        <a href={linkLinkedin} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href={linkYoutube} target="_blank" rel="noopener noreferrer">
          <BsYoutube />
        </a>
        <a href={linkInstagram} target="_blank" rel="noopener noreferrer">
          <BiLogoInstagramAlt />
        </a>
</div>


    </form>
  );
}
