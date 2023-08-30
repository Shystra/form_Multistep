import { useState } from "react";
import { useFormDataContext } from "../../../Hooks/FormContext";


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}


export const OptionResidence = ({ onNext, onBack }: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ file: OptionResidence.tsx:14 ~ OptionResidence ~ currentStep:", currentStep)
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
        <>
        
            <div>ENTROU NAS OPÇÕES DE RESIDENCIA</div>
            <button onClick={handleBackClick}>testing back</button>
            <button onClick={handleOptionClick('testing')}>testing</button>
        
        </>
    )
}