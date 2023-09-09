import React, { useState } from 'react';
import { useFormDataContext } from '../../Hooks/FormContext';
import styles from './EndForm.module.css';

[]
type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const EndForm = ({onBack}: Props) => {
    const {updateFields, removeFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(0);

    const [name, setName] = useState('');
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<number | null>(null);
    

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);   
    }



    const handleOptionCLick = (option: string) => (event: React.MouseEvent) => {
        event.preventDefault();
        handleChoice(option);
    };

    const handleBackClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }

    const handleSendClick = async (event: React.MouseEvent) => {

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    cep,
                    email,
                    phone,
                    // ... outros campos conforme necessário
                }),
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                console.log("Email enviado com sucesso!");
            } else {
                console.error("Erro ao enviar e-mail:", data);
            }
        } catch (error) {
            console.error("Erro de rede ou servidor ao enviar e-mail:", error);
        }

        updateFields({
            name, 
            cep, 
            email, 
            phone: phone?.toString() ?? ''
        })
    }



    return (
        <div className={styles.container_end}>
            
            <>
            <label className={styles.name}>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label className={styles.cep}>CEP do Imóvel</label>
                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />

                <label className={styles.email}>E-mail</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className={styles.phone}>Telefone</label>
                <input type="text" value={phone ?? ''} onChange={(e) => setPhone(e.target.value ? Number(e.target.value) : null)} />

                <div className={styles.wrapperbuttons}>
                    <div className={styles.back}>
                        <button onClick={handleBackClick}>Voltar</button>
                    </div>
                    <div className={styles.send}>
                        <button onClick={handleSendClick}>Enviar</button>
                    </div>
                </div>
          </>
        

        </div>
        
    )
}