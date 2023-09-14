import { useState } from 'react';


interface FormFields {
    name: string;
    cep: string;
    email: string;
    phone: string;
}
export const useFormValidation = () => {
    const [errors, setErrors] = useState<FormFields>({
        name: '',
        cep: '',
        email: '',
        phone: ''
    });

    const validateFields = (fields: FormFields) => {
        let isValid = true;
        const newErrors = {
            name: '',
            cep: '',
            email: '',
            phone: ''
        };

        if (!fields.name!.trim()) {
            newErrors.name = 'Nome é obrigatório';
            isValid = false;
        }

        if (!fields.cep!.trim()) {
            newErrors.cep = 'CEP é obrigatório';
            isValid = false;
        }

        if (!fields.email!.trim()) {
            newErrors.email = 'E-mail é obrigatório';
            isValid = false;
        }

        if (!fields.phone!.trim()) {
            newErrors.phone = 'Telefone é obrigatório';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return { errors, validateFields };
};
