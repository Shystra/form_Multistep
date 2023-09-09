// import styles from './OptionWay.module.scss';
import { useFormDataContext } from '../../../Hooks/FormContext';
import { OptionYard } from '../Option_Yard/OptionYard';
import styles from './OptionWay.module.css';
import { useState } from 'react';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const OptionWay = ({ onNext, onBack }: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    const [userChoice, setUserChoice] = useState<string | null>(null);
    console.log("🚀 ~ file: OptionWay.tsx:16 ~ OptionWay ~ userChoice:", userChoice)





    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if (choice === 'a_pé'){
            updateFields({ A_PÉ: choice });
        } else if (choice === 'carro'){
            updateFields({ CARRO: choice });
        } else if (choice === 'moto'){
            updateFields({ MOTO: choice})
        }
        
        onNext(choice);
    }



    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "a_pé") {
            removeFields(['A_PÉ']);
        } else if (userChoice === "carro") {
            removeFields(['CARRO'])
        } else if (userChoice === 'moto'){
            removeFields(['MOTO'])
        }
        
        event.preventDefault();
        setCurrentStep(0);
    
        // chame a função passada por props para lidar com o "voltar"
        onBack();
    }







    return (
        
        <div className={styles.container_option_way}>
            {currentStep === 0 && (
                <>
                    <div className={styles.progressOne_option_way}></div>
                        <label className={styles.progressLabel_option_way}>42,84%</label>
                            <h1 className={styles.title_option_way}>Como você costuma chegar no local?</h1>
                                


                                <div className={styles.buttonsWrapper_option_way_ape}>
                                    <div className={styles.option_way_ape}>
                                        <button className={styles.option_button_way_ape} onClick={handleOptionClick('a_pé')}>A Pé</button>
                                    </div>

                                    <div className={styles.option_way_car}>
                                        <button className={styles.option_button_way_car} onClick={handleOptionClick('carro')}>Carro</button>
                                    </div>

                                    <div className={styles.option_way_motorbike}>
                                        <button className={styles.option_button_way_motorbike} onClick={handleOptionClick('moto')}>Moto</button>
                                    </div>
                                </div>

                                <div className={styles.buttonBack_option_way}>
                                    <button onClick={handleBackClick}>Voltar</button>
                                </div>

                </>
            )}
            {currentStep === 1 && userChoice === 'a_pé' && <OptionYard 
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
                {currentStep === 1 && userChoice === 'carro' && <OptionYard 
                onNext={value => (value)}
                onBack={() => setCurrentStep(0)}
                />}
            {currentStep === 1 && userChoice === 'moto' && <OptionYard 
            onNext={value => (value)}
            onBack={() => setCurrentStep(0)}
            />}
        
        
        </div>
    )
}