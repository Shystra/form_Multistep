import { OptionSistem } from "../../Urban_or_Rural/OptionSistem/OptionSistem";
import styles from './CompanyTheft.module.css';
import { useState } from 'react';
import { useFormDataContext } from '../../../Hooks/FormContext';

type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const CompanyTheft = ({ onNext, onBack }:Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'sim'){
            updateFields({ Sim_Roubo_Empresa: choice })
        } else if (choice === 'nao'){
            updateFields({ Nao_Roubo_Empresa: choice })
        }

        onNext(choice);
    };

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "sim") {
            removeFields(['Sim_Roubo_Empresa']);
        } else if (userChoice === "nao") {
            removeFields(['Nao_Roubo_Empresa'])
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    };



    return (

        <div className={styles.container_option_theft}>
            {currentStep === 0 && (
                <>
                    <div className={styles.progressOne_option_theft}></div>
                        <label className={styles.progressLabel_option_theft}>75%</label>
                            <h1 className={styles.title_option_theft}>
                                Houve tentativa de roubo na sua empresa ou vizinha?</h1>
                
                
                    <div className={styles.buttonsWrapper_option_theft}>
                        <div className={styles.options_theft_yes}>
                            <button 
                            className={styles.button_theft_yes} 
                            onClick={handleOptionClick('sim')}>Sim</button>
                        </div>
                        <div className={styles.options_theft_no}>
                            <button 
                            className={styles.button_theft_no}
                            onClick={handleOptionClick('nao')}>Não</button>
                        </div>
                        </div>

                        <div className={styles.buttonBack_option_theft} onClick={handleBackClick}>
                            <button>Voltar</button>
                        </div>    
            
                </>
                )}
                {currentStep === 1 && userChoice === 'sim' && 
                <OptionSistem
                onNext={value => (value)}
                onBack={() => setCurrentStep(0)}
                />}
                
                
                {currentStep === 1 && userChoice === 'nao' && 
                <OptionSistem 
                onNext={value => (value)}
                onBack={() => setCurrentStep(0)}
                />}
        </div>
    )
}