import styles from './Residence.module.css';

import { useEffect, useState } from "react"
import { OptionUrbanHome } from "../Urban_or_Rural/OptionUrbanHome/OptionUrbanHome";
import { OptionRuralHome } from "../Urban_or_Rural/OptionRuralHome/OptionRuralHome";
import { useFormDataContext } from '../../Hooks/FormContext';





type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Residence = ({ onNext, onBack }: Props) => {
    
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);

    useEffect(() => {
        console.log("Residence montado");
      
        return () => {
          console.log("Residence desmontado");
        };
      }, []);
    
    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);
        
        // Atualizando apenas o campo específico conforme a escolha do usuário
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

    // const handleBackClick = () => {
    //     if (userChoice === "casa_urbana") {
    //         removeFields(['casa_urbana']);
    //     } else if (userChoice === "casa_rural") {
    //         removeFields(['casa_rural']);
    //     }
    //     setCurrentStep(0);
    // };
    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "casa_urbana") {
            removeFields(['casa_urbana']);
        } else if (userChoice === "casa_rural") {
            removeFields(['casa_rural']);
        }
        event.preventDefault();
        setCurrentStep(0);
    
        // chame a função passada por props para lidar com o "voltar"
        onBack();  
    };
    
    
    

    return (
        <div className={styles.containerForm_tipos_residencia}>
            {currentStep === 0 && (
                <>
                <div className={styles.progressOne_residence}></div>
                    <label className={styles.progressLabel_residence}>14,28%</label>
            <h1 className={styles.title_tipo_residencia}>Como é a sua residência?</h1>
            
            <div className={styles.buttonsWrapper}>
                <div className={styles.casaUrbana}>
                    <button className={styles.casaUrbanaButton}  onClick={handleOptionClick('casa_urbana')}>
                        Casa em área Urbana
                    </button>
          
                </div>
      

             <div className={styles.casaRural}>
                <button className={styles.casaRuralButton} onClick={handleOptionClick('casa_rural')}>
                    Casa em área Rural
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

        {currentStep === 1 && userChoice === "casa_rural" && <OptionRuralHome />}
    </div>

    )
}