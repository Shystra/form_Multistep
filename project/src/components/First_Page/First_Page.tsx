import { useFormDataContext } from '../../Hooks/FormContext';
import { Company } from '../Company/Company';
import { Townhouse } from '../Townhouse/Townhouse';
import { OptionUrbanHome } from '../Urban_or_Rural/OptionUrbanHome/OptionUrbanHome';
import styles from './First_Page.module.css';
import { useState } from 'react';


type Props = {
    onNext: (value: string) => void;
}

export const First_Page = ({ onNext }: Props) => {
    const { updateFields } = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ file: First_Page.tsx:13 ~ currentStep:", currentStep)
    const [userChoice, setUserChoice] = useState<string | null>(null);

    

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'residencia'){
            updateFields({ residencia: choice });
        } else if (choice === 'empresa_comercio'){
            updateFields({ empresa_comercio: choice });
        } else if (choice === 'condominio'){
            updateFields({ condominio: choice });
        }

        onNext(choice);
    }

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }
    


    return (
        
        <div className={styles.container_first_page}>
        {currentStep === 0 && (
            <>
            <div className={styles.wrapper_first_page}>
                <div className={styles.residencia}>
                    <button className={styles.residencia_button} 
                    onClick={handleOptionClick('residencia')}
                    >Residência</button>
                </div>
                <div className={styles.empresa_comercio}>
                    <button className={styles.empresa_comercio_button}
                    onClick={handleOptionClick('empresa_comercio')}
                    >Empresa/ Comércio</button>
                </div>

                <div className={styles.condominio}>
                    <button className={styles.condominio_button}
                    onClick={handleOptionClick('condominio')}
                    >Condomínio</button>
                </div>
            </div>

            </>
            )}

            {currentStep === 1 && userChoice === 'residencia' && 
            <OptionUrbanHome
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
            {currentStep === 1 && userChoice === 'empresa_comercio' && 
            <Company
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
            {currentStep === 1 && userChoice === 'condominio' && 
            <Townhouse
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
        </div>
    )
}