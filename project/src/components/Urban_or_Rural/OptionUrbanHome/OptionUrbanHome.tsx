import { useState, useEffect } from 'react';
import styles from './OptionUrbanHome.module.css';
import { useFormDataContext } from '../../../Hooks/FormContext';
import { OptionWay } from '../Option_Way/OptionWay';



type Props = {
  onNext: (value: string) => void;
}


export const OptionUrbanHome = ({ onNext }: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);

    useEffect(() => {
      console.log('Component mounted');
      return () => {
        console.log('Component will unmount');
      }
    }, []);

    const handleChoice = (choice: string) => {
      setUserChoice(choice);
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



    const handleBackClick = () => {
      if (userChoice === 'menos_5_horas_por_dia'){
        removeFields(['menos_5_horas_por_dia']);
      } else if (userChoice === 'mais_5_horas_por_dia'){
        removeFields(['mais_5_horas_por_dia']);
      } else if (userChoice === 'sempre_tem_alguem_la'){
        removeFields(['sempre_tem_alguem_la']);
      }
      setCurrentStep(0);
      
    }


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