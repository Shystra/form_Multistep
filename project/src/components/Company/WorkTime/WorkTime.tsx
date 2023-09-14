import { useFormDataContext } from '../../../Hooks/FormContext';
import {useState} from 'react';
import styles from './WorkTime.module.css';
import { TypeMerchandise } from '../TypeMerchandise/TypeMerchandise';



type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const WorkTime = ({onBack, onNext}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);
    const {updateFields, removeFields} = useFormDataContext();


    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'horario_comercial'){
            updateFields({ Horario_Comercial: choice })
        } else if (choice === 'horario_noturno'){
            updateFields({ Horario_Noturno: choice })
        } else if (choice === 'horario_24h'){
            updateFields({ Horario_24h: choice })
        }

        onNext(choice);
    }

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }
    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "horario_comercial") {
            removeFields(['Horario_Comercial']);
        } else if (userChoice === "horario_noturno") {
            removeFields(['Horario_Noturno']);
        } else if (userChoice === "horario_24h") {
            removeFields(['Horario_24h']);
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }



    return (
        <div className={styles.container_option_worktime}>
          {currentStep === 0 && (
          <>
          <div className={styles.progressOne_option_worktime}></div>        
            <label className={styles.progressLabel_option_worktime}>35%</label>
            
            <h1 className={styles.title_option_worktime}>Qual é o horário de funcionamento da sua empresa?</h1>
            


              <div className={styles.buttonsWrapper_option_menos_worktime}>
                <div className={styles.option_menos_worktime}>
                  <button className={styles.button_menos_worktime} 
                  onClick={handleOptionClick('horario_comercial')}>Horário comercial</button>
                </div>
              <div className={styles.option_mais_worktime}>
                <button className={styles.button_mais_worktime} 
                  onClick={handleOptionClick('horario_noturno')}>Noturno</button>
              </div>
              <div className={styles.option_ever_worktime}>
                <button className={styles.button_ever_worktime} 
                  onClick={handleOptionClick('horario_24h')}>24 horas</button>
              </div>
              </div>


                    <div className={styles.buttonBack_option_worktime}>
                        <button
                        onClick={handleBackClick}
                        >Voltar</button>
                    </div>
            </>
            )}

            {currentStep === 1 && userChoice === 'horario_comercial' &&
            <TypeMerchandise
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

            {currentStep === 1 && userChoice === 'horario_noturno' &&
            <TypeMerchandise
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

            {currentStep === 1 && userChoice === 'horario_24h' && 
            <TypeMerchandise
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

        </div>
    )
}