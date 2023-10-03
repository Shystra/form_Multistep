import React, { useState } from 'react';
import { useFormDataContext } from '../../../Hooks/FormContext';
import styles from './EndForm.module.css';
// import { useFormValidation } from '../../../Hooks/FormValidator';


type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
type AlertProps = {
    message: string;
    type?: 'error' | 'success';
};

const Alert: React.FC<AlertProps> = ({ message, type = 'success' }) => {
    let alertStyle = styles.alert;

    if (type === 'error') {
        alertStyle = styles.alertError;
    }

    return <div className={alertStyle}>{message}</div>;
};

export const EndForm = ({ onBack }: Props) => {
    const { formData } = useFormDataContext();
    const { updateFields } = useFormDataContext();
    // @ts-ignore
    const [userChoice, setUserChoice] = useState<string | null>(null);
    // @ts-ignore
    const [currentStep, setCurrentStep] = useState(5);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    //FORMATAÇÃO DO TELEFONE & CEP
    const [phone, setPhone] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false);
    const [countdown, setCountdown] = useState(0);
    // const { errors, validateFields } = useFormValidation();
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    // @ts-ignore
    const handleChoice = (choice: string) => {
        setUserChoice(choice);
        setCurrentStep(1);
    };


    const handleBackClick = (event: React.MouseEvent) => {
        event.preventDefault();
        // if (!validateFields({ name, cep, email, phone })) {
        //     return;
        // }
        setCurrentStep(0);
        onBack();
    };


    const formatPhone: (num: string) => string = (num) => {
        let cleaned = num.replace(/\D/g, '');

        if (cleaned.length <= 2) {
            return `(${cleaned}`;
        }

        let match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            if (match[3]) {
                return `(${match[1]}) ${match[2]}-${match[3]}`;
            }
            return `(${match[1]}) ${match[2]}`;
        }

        return num;
    };

    const formatCEP: (cep: string) => string = (cep) => {
        let cleaned = cep.replace(/\D/g, '');

        if (cleaned.length <= 5) {
            return cleaned;
        }

        let match = cleaned.match(/^(\d{5})(\d{0,3})$/);
        if (match) {
            return `${match[1]}-${match[2]}`;
        }

        return cep;
    };

    const validateForm = () => {
        let errors = [];

        if (!name.trim()) {
            errors.push("Nome é obrigatório.");
        }
        if (!cep.trim() || cep.length !== 9) {
            errors.push("CEP é obrigatório e deve ter 9 caracteres.");
        }
        if (!email.trim() || !email.includes("@")) {  // Essa é uma validação simples para o e-mail. Pode torná-la mais rigorosa se necessário.
            errors.push("E-mail é obrigatório e deve ser válido.");
        }
        if (!phone.trim() || phone.length < 13) { // Exemplo: (11) 91234-5678 tem 13 caracteres
            errors.push("Telefone é obrigatório e deve estar no formato (XX) XXXXX-XXXX.");
        }

        setValidationErrors(errors);
        return errors.length === 0; // Se não houver erros, retorna true. Caso contrário, false.
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
        if (!validateForm()) {
            return;
        }
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
                setCountdown(5); // Reset countdown to 5 seconds
            
                // Create a countdown interval that decrements every second
                const interval = setInterval(() => {
                    setCountdown(prev => {
                        if (prev <= 1) {
                            return 1;  // Keep it at 1 for the last second
                        }
                        return prev - 1;
                    });
                }, 1000);
            
                // After 5 seconds, stop the countdown, hide the alert, and redirect
                setTimeout(() => {
                    clearInterval(interval);  // Stop the countdown
                    setShowAlert(false);
                    window.location.href = "https://www.intersept.com.br/";
                }, 5000);
            }

            else {
                if (response.headers.get('content-type')?.includes('application/json')) {
                    // @ts-ignore
                    const data = await response.json();
                } else {
                    // @ts-ignore
                    const text = await response.text();
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
            <p className={styles.instructionMessage}>Para receber sua análise gratuita preencha os dados!</p>
            {showAlert && <Alert message={`Formulário Enviado! Redirecionando em ${countdown}...`} type="success" />}
            {validationErrors.length > 0 &&
                validationErrors.map((error, index) => (
                    <Alert key={index} message={error} type="error" />
                ))}


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
                <input type="text" value={phone} onChange={handleTelChange} />

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