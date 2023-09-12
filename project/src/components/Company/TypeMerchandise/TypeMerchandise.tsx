import { useState } from 'react';
import styles from './TypeMerchandise.module.css';
import { useFormDataContext } from '../../../Hooks/FormContext';
import { CompanyTheft } from '../CompanyTheft/CompanyTheft';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const TypeMerchandise = ({onNext, onBack}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);
    const {updateFields, removeFields} = useFormDataContext();


    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'baixo_valor_financeiro'){
            updateFields({ Baixo_Valor_Financeiro: choice })
        } else if (choice === 'medio_valor_financeiro'){
            updateFields({ Medio_Valor_Financeiro: choice })
        } else if (choice === 'alto_valor_financeiro'){
            updateFields({ Alto_Valor_Financeiro: choice })
        }
        onNext(choice);
    };


    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "baixo_valor_financeiro") {
            removeFields(['Baixo_Valor_Financeiro']);
        } else if (userChoice === "medio_valor_financeiro") {
            removeFields(['Medio_Valor_Financeiro']);
        } else if (userChoice === "alto_valor_financeiro") {
            removeFields(['Alto_Valor_Financeiro']);
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }

    return(
        <div className={styles.container_option_merchandise}>
          {currentStep === 0 && (
          <>
          <div className={styles.progressOne_option_merchandise}></div>        
            <label className={styles.progressLabel_option_merchandise}>28,56%</label>
            
            <h1 className={styles.title_option_merchandise}>Qual é o tipo de mercadoria comercializada pela sua empresa?</h1>
            


              <div className={styles.buttonsWrapper_option_menos_merchandise}>
                <div className={styles.option_menos_merchandise}>
                  <button className={styles.button_menos_merchandise} 
                  onClick={handleOptionClick('baixo_valor_financeiro')}>Baixo Valor Financeiro</button>
                </div>
              <div className={styles.option_mais_merchandise}>
                <button className={styles.button_mais_merchandise} 
                  onClick={handleOptionClick('medio_valor_financeiro')}>Médio Valor Financeiro</button>
              </div>
              <div className={styles.option_ever_merchandise}>
                <button className={styles.button_ever_merchandise} 
                  onClick={handleOptionClick('alto_valor_financeiro')}>Alto Valor Financeiro</button>
              </div>
              </div>

              <div className={styles.buttonBack_option_merchandise}>
                <button onClick={handleBackClick}>Voltar</button>
                </div>  
            
            </>
            )}

            {currentStep === 1 && userChoice === 'baixo_valor_financeiro' && 
            <CompanyTheft
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

            {currentStep === 1 && userChoice === 'medio_valor_financeiro' &&
            <CompanyTheft
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

            {currentStep === 1 && userChoice === 'alto_valor_financeiro' &&
            <CompanyTheft
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}

        </div>
    )
}