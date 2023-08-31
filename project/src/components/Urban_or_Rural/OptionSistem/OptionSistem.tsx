import { useState } from "react";
import { useFormDataContext } from "../../../Hooks/FormContext";


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
    
}

export const OptionSistem = ({ onNext, onBack}: Props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);

        

        if(choice === 'sim'){
            updateFields({ Sim_Sistema: choice })
        } else if (choice === 'nao'){
            updateFields({ Nao_Sistema: choice })
        }

        onNext(choice);
    };



    
    return (
        <h1>entrou no sistema</h1>
        
    )    
}