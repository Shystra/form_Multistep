import React, { useState } from 'react';
import { useFormDataContext } from '../../../Hooks/FormContext';
import styles from './EndForm.module.css';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const EndForm = ({onBack}: Props) => {
    const { formData } = useFormDataContext();

    const {updateFields} = useFormDataContext();
    const [userChoice, setUserChoice] = useState<string | null>(null);
    console.log("🚀 ~ file: EndForm.tsx:13 ~ EndForm ~ userChoice:", userChoice)
    const [currentStep, setCurrentStep] = useState(0);
    console.log("🚀 ~ file: EndForm.tsx:14 ~ EndForm ~ currentStep:", currentStep)

    const [name, setName] = useState('');
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState<number | null>(null);
    

    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);   
    }
    console.log("🚀 ~ file: EndForm.tsx:27 ~ handleChoice ~ handleChoice:", handleChoice)

    const handleBackClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setCurrentStep(0);
        onBack();
    }

    const handleSendClick = async (event: React.MouseEvent) => {
      
    console.log("🚀 ~ file: EndForm.tsx:42 ~ handleSendClick ~ event:", event)
        try {
            
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    name,
                    cep,
                    email,
                    phone,
                }),
                
                
            });

    
            const data = await response.json();
    
            if (response.status === 200) {
                 
                alert('Formulário Enviado');
                window.location.href = 'https://www.intersept.com.br/';

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