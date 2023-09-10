import { useFormDataContext } from '../../Hooks/FormContext';
import styles from './Company.module.css';
import {useState} from 'react';
import { Employees } from './Employees/Employees';

type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Company = ({onNext, onBack}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        if(choice === 'empresa_centro_comercial'){
            updateFields({ Empresa_Centro_Comercial: choice })
        } else if (choice === 'empresa_area_industrial'){
            updateFields({ Empresa_Area_Industrial: choice })
        } else if (choice === 'predio_comercial'){
            updateFields({ Predio_Comercial: choice })
        } else if (choice === 'comercio_rua'){
            updateFields({ Comercio_Rua: choice })
        }

        onNext(choice);
    };

    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    };

    const handleBackClick = (event: React.MouseEvent) => {
        if (userChoice === "empresa_centro_comercial") {
            removeFields(['Empresa_Centro_Comercial']);
        } else if (userChoice === "empresa_area_industrial") {
            removeFields(['Empresa_Area_Industrial'])
        } else if (userChoice === "predio_comercial") {
            removeFields(['Predio_Comercial'])
        } else if (userChoice === "comercio_rua") {
            removeFields(['Comercio_Rua'])
        }

        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }




    return (
        <div className={styles.container_option_company}>
            {currentStep === 0 && (
            <>
            <div className={styles.progressOne_option_company}></div>
                <label className={styles.progressLabel_option_company}>20%</label>
                    <h1 className={styles.title_option_company}>
                        Selecione uma das opções:</h1>

            <div className={styles.buttonsWrapper_option_company}>
               

                <div className={styles.option_company_shopping_center}>
                    <button
                    onClick={handleOptionClick('empresa_centro_comercial')}
                    >Empresa em centro comercial</button>
                </div>

                <div className={styles.option_company_industrial_area}>
                    <button
                    onClick={handleOptionClick('empresa_area_industrial')}
                    >Empresa em área industrial</button>
                </div>

               
            </div>

            <div className={styles.buttons_wrapper_two}>
                <div className={styles.option_business_building}>
                    <button
                    onClick={handleOptionClick('predio_comercial')}
                    >Prédio comercial</button>
                </div>
                <div className={styles.option_street_commerce}>
                    <button
                    onClick={handleOptionClick('comercio_rua')}
                    >Comércio de Rua</button>
                </div>

            </div>


            <div className={styles.button_back}>
                <button
                onClick={handleBackClick}
                >Voltar</button>
            </div>
            
            </>
            )}
        
            {currentStep === 1 && userChoice === 'empresa_centro_comercial' && 
            <Employees/>}
            {currentStep === 1 && userChoice === 'empresa_area_industrial' && 
            <Employees/>}
            {currentStep === 1 && userChoice === 'predio_comercial' && 
            <Employees/>}
            {currentStep === 1 && userChoice === 'comercio_rua' &&
            <Employees/>}
        </div>
    )
};