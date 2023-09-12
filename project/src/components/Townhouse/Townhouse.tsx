import { useState } from 'react';
import styles from './Townhouse.module.css';
import { useFormDataContext } from '../../Hooks/FormContext';
import { Units } from './Units/Units';

type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Townhouse = ({onNext, onBack}: Props) => {
    const [ currentStep, setCurrentStep ] = useState(0);
    const { updateFields, removeFields } = useFormDataContext();
    const [ userChoice, setUserChoice ] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'condominio_residencial'){
            updateFields({ Condominio_Residencial:choice })
        } else if (choice === 'condominio_comercial'){
            updateFields({ Condominio_Comercial:choice})
        } 

        onNext(choice)
    };


    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault()
        handleChoice(option)
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "condominio_residencial") {
            removeFields(['Condominio_Residencial']);
        } else if (userChoice === "condominio_comercial") {
            removeFields(['Condominio_Comercial'])
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }

    return (
        <div className={styles.container_option_townhouse}>
            {currentStep === 0 && (
            <>
            <div className={styles.progressOne_option_townhouse}></div>
                <label className={styles.progressLabel_option_townhouse}>20%</label>
                    <h1 className={styles.title_option_townhouse}>
                        Como é o seu Condomínio?</h1>

            <div className={styles.buttonsWrapper_option_townhouse}>
               

                <div className={styles.option_townhouse_shopping_center}>
                    <button
                    onClick={handleOptionClick('condominio_residencial')}
                    >Condomínio Residencial</button>
                </div>

                <div className={styles.option_townhouse_industrial_area}>
                    <button
                    onClick={handleOptionClick('condominio_comercial')}
                    >Condomínio Comercial</button>
                </div>

               
            </div>



            <div className={styles.button_back}>
                <button
                onClick={handleBackClick}
                >Voltar</button>
            </div>
            
            </>
            )}
        
            {currentStep === 1 && userChoice === 'condominio_residencial' && 
            <Units
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
            {currentStep === 1 && userChoice === 'condominio_comercial' && 
            <Units
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
            
        </div>
    )
}
