import { useFormDataContext } from "../../../Hooks/FormContext";
import { useState } from "react";
import styles from "./Units.module.css";
import { WorkTimeTownhouse } from "../WorkTimeTownhouse/WorkTimeTownhouse";

type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Units = ({onNext, onBack}: Props) => {
    const [ currentStep, setCurrentStep ] = useState(0);
    const { updateFields, removeFields } = useFormDataContext();
    const [ userChoice, setUserChoice ] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'ate_10_unidades'){
            updateFields({ Até_10_Unidades:choice })
        } else if (choice === 'ate_50_unidades'){
            updateFields({ Até_50_Unidades:choice})
        } else if (choice === 'acima_50_unidades'){
            updateFields({ Acima_50_Unidades: choice})
        }

        onNext(choice)
    };


    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault()
        handleChoice(option)
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "ate_10_unidades") {
            removeFields(['Até_10_Unidades']);
        } else if (userChoice === "ate_50_unidades") {
            removeFields(['Até_50_Unidades'])
        } else if (userChoice === "acima_50_unidades") {
            removeFields(['Acima_50_Unidades'])
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    };


    return(
        <div className={styles.container_option_units}>
          {currentStep === 0 && (
          <>
          <div className={styles.progressOne_option_units}></div>        
            <label className={styles.progressLabel_option_units}>28,56%</label>
            
            <h1 className={styles.title_option_units}>Qual é a quantidade de unidades?</h1>
            


              <div className={styles.buttonsWrapper_option_menos_units}>
                <div className={styles.option_menos_units}>
                  <button className={styles.button_menos_units} 
                  onClick={handleOptionClick('ate_10_unidades')}>Até 10 Unidades</button>
                </div>
              <div className={styles.option_mais_units}>
                <button className={styles.button_mais_units} 
                  onClick={handleOptionClick('ate_50_unidades')}>Até 50 Unidades</button>
              </div>
              <div className={styles.option_ever_units}>
                <button className={styles.button_ever_units} 
                  onClick={handleOptionClick('acima_50_unidades')}>Acima de 50 Unidades</button>
              </div>
              </div>

              <div className={styles.buttonBack_option_units}>
                <button onClick={handleBackClick}>Voltar</button>
                </div>     

                </>
            )}
            {currentStep === 1 && userChoice === 'ate_10_unidades' && <WorkTimeTownhouse 
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
                {currentStep === 1 && userChoice === 'ate_50_unidades' && <WorkTimeTownhouse 
                onNext={value => (value)}
                onBack={() => setCurrentStep(0)}
                />}
            {currentStep === 1 && userChoice === 'acima_50_unidades' && <WorkTimeTownhouse 
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
        
        
        </div>
    )

}