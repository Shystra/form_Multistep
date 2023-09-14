import styles from './UrbanOrRural.module.css';

import { useState } from "react"
import { OptionUrbanHome } from "./OptionUrbanHome/OptionUrbanHome";
import { useFormDataContext } from '../../Hooks/FormContext';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const UrbanOrRural = ({ onNext, onBack }: Props) => {
    
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);
    
    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);
        
        if (choice === 'casa_urbana') {
            updateFields({ casa_urbana: choice });
        } else if (choice === 'casa_rural') {
            updateFields({ casa_rural: choice });
        }
        
        onNext(choice); 
    }
    
    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }


    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "casa_urbana") {
            removeFields(['casa_urbana']);
        } else if (userChoice === "casa_rural") {
            removeFields(['casa_rural']);
        }
        event.preventDefault();
        setCurrentStep(0);

        onBack();  
    };
    
    
    

    return (
        <div className={styles.containerForm_tipos_residencia}>
        {currentStep === 0 && (
                <>
                <div className={styles.progressOne_residence}></div>
                    <label className={styles.progressLabel_residence}>20%</label>
            <h1 className={styles.title_tipo_residencia}>Como é a sua residência?</h1>
            
            <div className={styles.buttonsWrapper}>
                <div className={styles.casaUrbana}>
                    <button onClick={handleOptionClick('casa_urbana')}>
                        Casa em área urbana
                    </button>
          
                </div>
      

             <div className={styles.casaRural}>
                <button onClick={handleOptionClick('casa_rural')}>
                    Casa em área rural
                </button>
            </div>
            </div>
            <div className={styles.buttonBack}>
                <button onClick={handleBackClick}>Voltar</button>
            </div>
            
      </>
      )}
        {currentStep === 1 && userChoice === "casa_urbana" 
        && <OptionUrbanHome 
        onNext={value => (value)}
        onBack={() => setCurrentStep(0)}
        />}

        {currentStep === 1 && userChoice === "casa_rural" 
        && <OptionUrbanHome 
        onNext={value => (value)}
        onBack={() => setCurrentStep(0)}
        />}
        
    </div>

    )
}