import React, { useState } from 'react';
import { useFormDataContext } from '../../../Hooks/FormContext';
import styles from './EndForm.module.css';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
const Alert: React.FC<{ message: string }> = ({ message }) => {
    return <div className={styles.alert}>{message}</div>;
};

export const EndForm = ({ onBack }: Props) => {
    const { formData } = useFormDataContext();
    const { updateFields } = useFormDataContext();
    // @ts-ignore
    const [userChoice, setUserChoice] = useState<string | null>(null);
    // @ts-ignore
    const [currentStep, setCurrentStep] = useState(0);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //FORMATAÇÃO DO TELEFONE & CEP
    const [phone, setPhone] = useState<string>('');
    const [cep, setCep] = useState<string>('');

    const [showAlert, setShowAlert] = useState(false);
    const [countdown, setCountdown] = useState(5);

    // @ts-ignore
    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);
    };


    const handleBackClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setCurrentStep(0);
        onBack();
    };


    const formatPhone: (num: string) => string = (num) => {
        let cleaned = num.replace(/\D/g, '');
        
        if(cleaned.length <= 2) {
            return `(${cleaned}`;
        }
    
        let match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            if(match[3]) {
                return `(${match[1]}) ${match[2]}-${match[3]}`;
            }
            return `(${match[1]}) ${match[2]}`;
        }
        
        return num;
    };

    const formatCEP: (cep: string) => string = (cep) => {
        let cleaned = cep.replace(/\D/g, '');
    
        if(cleaned.length <= 5) {
            return cleaned;
        }
    
        let match = cleaned.match(/^(\d{5})(\d{0,3})$/);
        if (match) {
            return `${match[1]}-${match[2]}`;
        }
        
        return cep;
    };



    const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/\D/g, '');
        setPhone(formatPhone(rawValue));
    };
    const handleCEPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/\D/g, '');
        setCep(formatCEP(rawValue));
    };
    
    

    
    

    const handleSendClick = async (event: React.MouseEvent) => {
        event.preventDefault();
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
    
            if (response.status === 200) {
                // @ts-ignore
                const message = await response.text();
        
                setShowAlert(true);
                const interval = setInterval(() => {
                    setCountdown((prev) => prev - 1);
                }, 1000);
        
                setTimeout(() => {
                    clearInterval(interval);
                    setShowAlert(false);
                    setCountdown(5);
                    // navigate("https://www.intersept.com.br/");
                    window.location.href = "https://www.intersept.com.br/";
                }, 5000);
            }
            else {
                if (response.headers.get('content-type')?.includes('application/json')) {
                    // @ts-ignore
                    const data = await response.json();
                    // console.error("Erro ao enviar e-mail:", data);
                } else {
                    // @ts-ignore
                    const text = await response.text();
                    // console.error("Não recebemos um JSON:", text);
                }
            }
        } catch (error) {
            // console.error("Erro de rede ou servidor ao enviar e-mail:", error);
        }
    
        updateFields({
            name,
            cep: cep?.toString() ?? '',
            email,
            phone
        });
        
    };

    
    
    


    return (
        <div className={styles.container_end}>
            {showAlert &&
                <Alert message={`Formulário Enviado! Redirecionando em ${countdown}...`} />
            }
            <>
                <div className={styles.progressOneEndForm}></div>
                <label className={styles.progressLabelEndForm}>100%</label>
                <label className={styles.name}>Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label className={styles.cep}>CEP do Imóvel</label>
                <input type="text" value={cep} onChange={handleCEPChange} maxLength={9} />

                <label className={styles.email}>E-mail</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className={styles.phone}>Telefone</label>
                <input type="text" value={phone}  onChange={handleTelChange}  />

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