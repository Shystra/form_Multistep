import { useState } from 'react';
import styles from './Employees.module.css';
import { useFormDataContext } from '../../../Hooks/FormContext';
import { WorkTime } from '../WorkTime/WorkTime';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}


export const Employees = ({onBack, onNext}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);
    const {updateFields, removeFields} = useFormDataContext();



    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'ate_2'){
            updateFields({ Ate_2_Funcionarios: choice })
        } else if (choice === 'de_3_a_10'){
            updateFields({ De_3_a_10_Funcionarios: choice })
        } else if (choice === 'mais_de_10'){
            updateFields({ Mais_de_10_Funcionarios: choice })
        }

        onNext(choice);
    }
    
    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }




    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "ate_2") {
            removeFields(['Ate_2_Funcionarios']);
        } else if (userChoice === "de_3_a_10") {
            removeFields(['De_3_a_10_Funcionarios']);
        } else if (userChoice === "mais_de_10") {
            removeFields(['Mais_de_10_Funcionarios']);
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }

    return (
        <div className={styles.container_employees}>
            {currentStep === 0 && (
            <>
            <div className={styles.progressOne_employees}></div>
                <label className={styles.progressLabel_employees}>20%</label>
                    <h1 className={styles.title_employees}>
                        Qual é o número de funcionários da sua empresa?
                    </h1>

                    <div className={styles.buttonsWrapper_employees}>
                        <div className={styles.option_employees_one}>
                            <button
                            onClick={handleOptionClick('ate_2')}
                            >Até 2</button>
                        </div>

                        <div className={styles.option_employees_two}>
                            <button
                            onClick={handleOptionClick('de_3_a_10')}
                            >De 3 a 10</button>
                        </div>

                        <div className={styles.option_employees_three}>
                            <button
                            onClick={handleOptionClick('mais_de_10')}
                            >Mais de 10</button>
                        </div>
                    </div>

                    <div className={styles.onBack}>
                        <button
                        onClick={handleBackClick}
                        >Voltar</button>
                    </div>
            
            </>
            )}
            
            {currentStep === 1 && userChoice === 'ate_2' && 
            <WorkTime/>}

            {currentStep === 1 && userChoice === 'de_3_a_10' &&
            <WorkTime/>}

            {currentStep === 1 && userChoice === 'mais_de_10' &&
            <WorkTime/>}

        </div>
    )
}