import { useFormDataContext } from '../../Hooks/FormContext';
import styles from './First_Page.module.css';
import { useState } from 'react';


type Props = {
    onNext: (value: string) => void;
}

export const First_Page = ({ onNext }: Props) => {
    const { updateFields } = useFormDataContext();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    

    const handleChoice = (choice: string) => {
        setSelectedValue(choice);
        setCurrentStep(1);
        updateFields({ residencia: choice });
        onNext(choice); // chamada para avançar para a próxima página ou tela
    }

    
    const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    }
    // Nota: a dependência vazia [] garante que isso seja executado apenas na montagem
    

    return (
        <div className={styles.container_first_page}>
            <div className={styles.wrapper_first_page}>
                <div className={styles.residencia}>
                    <button className={styles.residencia_button} onClick={handleOptionClick('residencia')}>Residência</button>
                </div>
                <div className={styles.empresa_comercio}>
                    <button className={styles.empresa_comercio_button}>Empresa/ Comércio</button>
                </div>

                <div className={styles.condominio}>
                    <button className={styles.condominio_button}>Condomínio</button>
                </div>
            </div>
        </div>
    )
}
