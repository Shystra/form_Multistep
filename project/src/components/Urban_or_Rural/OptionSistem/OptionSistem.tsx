import React, { useState } from "react";
import { useFormDataContext } from "../../../Hooks/FormContext";
import styles from './OptionSistem.module.css';
import { EndForm } from "../../EndForm/EndForm";


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
    
}

export const OptionSistem = ({ onNext, onBack}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'sim'){
            updateFields({ Sim_Sistema: choice })
        } else if (choice === 'nao'){
            updateFields({ Nao_Sistema: choice })
        }

        onNext(choice);
    };

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if(userChoice === "sim"){
            removeFields(['Sim_Sistema']);
        } else if (userChoice === "nao"){
            removeFields(['Nao_Sistema'])
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    };

   
    return (
        <div className={styles.container_option_sistem}>
            {currentStep === 0 && (
                <>
                <div className={styles.progressOne_option_sistem}></div>
                    <label className={styles.progressLabel_option_sistem}>20%</label>
                    <h1 className={styles.title_option_sistem}>Já possui algum sistema de segurança?</h1>


                    <div className={styles.buttonWrapper_option_sistem}>
                        <div className={styles.option_sistem_yes}>
                            <button className={styles.button_option_sistem} onClick={handleOptionClick('sim')}>Sim</button>
                        </div>

                        <div className={styles.option_sistem_no}>
                            <button className={styles.button_option_sistem} onClick={handleOptionClick('nao')}>Não</button>
                        </div>
                    </div>

                    <div className={styles.buttonBack_option_sistem} 
                    onClick={handleBackClick}>
                        <button className={styles.buttonBack_option_sistem}>Voltar</button>
                    </div>
                </>
            )}
            {currentStep === 1 && userChoice === 'sim' && <EndForm
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
            {currentStep === 1 && userChoice === 'nao' && <EndForm
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
        </div>
        
    )    
}