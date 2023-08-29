import { useState, useEffect } from 'react';
import styles from './OptionUrbanHome.module.css';
import { useFormDataContext } from '../../../Hooks/FormContext';
import { OptionWay } from '../Option_Way/OptionWay';



type Props = {
  onNext: (value: string) => void;
  onBack: () => void;
}


export const OptionUrbanHome = ({ onNext, onBack }: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ file: OptionUrbanHome.tsx:17 ~ OptionUrbanHome ~ currentStep:", currentStep)
    const [userChoice, setUserChoice] = useState<string | null>(null);
    console.log("🚀 ~ file: OptionUrbanHome.tsx:18 ~ OptionUrbanHome ~ userChoice:", userChoice)
    
    

    const handleChoice = (choice: string) => {
      setUserChoice(choice);
      console.log("🚀 ~ file: OptionUrbanHome.tsx:27 ~ handleChoice ~ choice:", choice)
      setCurrentStep(1);

      if (choice === 'menos_5_horas_por_dia'){
        updateFields({ menos_5_horas_por_dia: choice });
      } else if (choice === 'mais_5_horas_por_dia'){
        updateFields({ mais_5_horas_por_dia: choice });
      } else if (choice === 'sempre_tem_alguem_la'){
        updateFields({ sempre_tem_alguem_la: choice });
      }
    
      onNext(choice);
    }

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      handleChoice(option);
    }

    // useEffect(() => {
    //   const savedStep = localStorage.getItem('currentStep');
    //   if (savedStep) {
    //     setCurrentStep(Number(savedStep));
    //   }
    // }, []);
    
    // useEffect(() => {
    //   localStorage.setItem('currentStep', String(currentStep));
    // }, [currentStep]);

    const handleBackClick = (event: React.MouseEvent) => {
      if (userChoice === "casa_urbana") {
          removeFields(['casa_urbana']);
      } else if (userChoice === "casa_rural") {
          removeFields(['casa_rural']);
      }
      event.preventDefault();
      setCurrentStep(0);
  
      // chame a função passada por props para lidar com o "voltar"
      onBack();  
  };


    // const handleBackClick = () => {
    //   console.log("🚀 ~ file: OptionUrbanHome.tsx:58 ~ handleBackClick ~ handleBackClick:", handleBackClick)
    //   if (userChoice === 'menos_5_horas_por_dia'){
    //     removeFields(['menos_5_horas_por_dia']);
    //   } else if (userChoice === 'mais_5_horas_por_dia'){
    //     removeFields(['mais_5_horas_por_dia']);
    //   } else if (userChoice === 'sempre_tem_alguem_la'){
    //     removeFields(['sempre_tem_alguem_la']);
    //   }
    //   setCurrentStep(0);
      
    // }


    return (
        <div className={styles.container_option_urban}>
          {currentStep === 0 && (
          <>
          <div className={styles.progressOne_option_urban}></div>        
            <label className={styles.progressLabel_option_urban}>14,28%</label>
            
            <h1 className={styles.title_option_urban}>Por quanto tempo a sua propriedade fica sem ninguém?</h1>
            


              <div className={styles.buttonsWrapper_option_menos_urban}>
                <div className={styles.option_menos_urban}>
                  <button className={styles.button_menos_urban} 
                  onClick={handleOptionClick('menos_5_horas_por_dia')}>Menos de 5 Horas por dia</button>
                </div>
              <div className={styles.option_mais_urban}>
                <button className={styles.button_mais_urban} 
                  onClick={handleOptionClick('mais_5_horas_por_dia')}>Mais de 5 Horas por dia</button>
              </div>
              <div className={styles.option_ever_urban}>
                <button className={styles.button_ever_urban} 
                  onClick={handleOptionClick('sempre_tem_alguem_la')}>Sempre tem alguém lá</button>
              </div>
              </div>

              <div className={styles.buttonBack_option_urban}>
                <button onClick={handleBackClick}>Voltar</button>
                </div>     
          </>
          )}
          {currentStep === 1 && userChoice === 'menos_5_horas_por_dia' && <OptionWay onNext={value => (value)}/>}
          {currentStep === 1 && userChoice === 'mais_5_horas_por_dia' && <OptionWay onNext={value => (value)} />}
          {currentStep === 1 && userChoice === 'sempre_tem_alguem_la' && <OptionWay onNext={value => (value)} />}
        </div>

    )
}