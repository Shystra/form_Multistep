import { useFormDataContext } from '../../../Hooks/FormContext';
import styles from './OptionTheft.module.css';
import { useState } from 'react';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}

export const OptionTheft = ({ onBack, onNext }: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'sim'){
            updateFields({ Sim_Roubo: choice })
        } else if (choice === 'nao'){
            updateFields({ Nao_Roubo: choice })
        }

        onNext(choice);
    };

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "sim") {
            removeFields(['Sim_Roubo']);
        } else if (userChoice === "nao") {
            removeFields(['Nao_Roubo'])
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
                        <label className={styles.progressLabel_option_theft}>20%</label>
                            <h1 className={styles.title_option_theft}>
                                Alguém já tentou roubar sua casa ou a casa dos vizinhos?</h1>
                
                
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
        </div>
    )
}