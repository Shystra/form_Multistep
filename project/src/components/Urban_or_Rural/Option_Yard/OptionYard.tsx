import { useState } from "react";
import { useFormDataContext } from "../../../Hooks/FormContext";
import styles from './OptionYard.module.css';
import { OptionTheft } from "../Option_Theft/OptionTheft";


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}


export const OptionYard = ({ onNext, onBack }: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ file: OptionResidence.tsx:14 ~ OptionResidence ~ currentStep:", currentStep)
    const [userChoice, setUserChoice] = useState<string | null>(null);
    console.log("🚀 ~ file: OptionWay.tsx:16 ~ OptionWay ~ userChoice:", userChoice)


    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'patio_fundos'){
            updateFields({ Patio_Fundos: choice });
        } else if
        (choice === 'patio_frente_e_fundos'){
            updateFields({ Patio_Frente_e_Fundos: choice });
        } else if (choice === 'nao_possui_patio'){
            updateFields({ Nao_possui_patio: choice })
        }

        onNext(choice);
    }

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }




    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "patio_fundos") {
            removeFields(['Patio_Fundos']);
        } else if (userChoice === "patio_frente_e_fundos") {
            removeFields(['Patio_Frente_e_Fundos'])
        } else if (userChoice === 'nao_possui_patio'){
            removeFields(['Nao_possui_patio'])
        }
        
        event.preventDefault();
        setCurrentStep(0);
        // chame a função passada por props para lidar com o "voltar"
        onBack();
    }



    return (
        <div className={styles.container_option_residence}>
            {currentStep === 0 && (
            <>
            <div className={styles.progressOne_option_residence}></div>
                <label className={styles.progressLabel_option_residence}>65%</label>
                <h1 className={styles.title_option_residence}>A Residência Possui:</h1>


                    <div className={styles.buttonsWrapper_option_residence}>
                        <div className={styles.option_residence_patio_fundos}>
                            <button 
                            className={styles.button_residence_patio_fundos} 
                            onClick={handleOptionClick('patio_fundos')}>
                                Pátio fundos</button>
                        </div>

                        <div className={styles.option_residence_patio_frente_fundos}>
                            <button 
                            className={styles.button_residence_patio_frente_fundos} 
                            onClick={handleOptionClick('patio_frente_e_fundos')}>
                                Pátio frente e fundos
                            </button>
                        </div>
                        <div className={styles.option_residence_nao_possui_patio}>
                            <button 
                            className={styles.button_residence_nao_possui_patio}
                            onClick={handleOptionClick('nao_possui_patio')}>
                                Não possui pátio
                            </button>
                        </div>
                    </div>

                    <div className={styles.buttonBack_option_residence}>
                        <button onClick={handleBackClick}>Voltar</button>
                    </div>

            </>
        )}
        {currentStep === 1 && userChoice === 'patio_fundos' && <OptionTheft
        onNext={value => (value)}
        onBack={() => setCurrentStep(0)}
        />}
        {currentStep === 1 && userChoice === 'patio_frente_e_fundos' && <OptionTheft
        onNext={value => (value)}
        onBack={() => setCurrentStep(0)}
        />}
        {currentStep === 1 && userChoice === 'nao_possui_patio' && <OptionTheft
        onNext={value => (value)}
        onBack={() => setCurrentStep(0)}
        />}
        </div>
    )
}