// FormContext.tsx

import { createContext, useContext, useEffect, useState, useMemo } from 'react';

type FormData = {
  residencia?: string;
  casa_urbana?: string;
  casa_rural?: string;
  menos_5_horas_por_dia?: string;
  mais_5_horas_por_dia?: string;
  sempre_tem_alguem_la?: string;
  A_PÉ?: string;
  CARRO?: string;
  MOTO?: string;
  Patio_Fundos?: string;
  Patio_Frente_e_Fundos?: string;
  Nao_possui_patio?: string;
  // ... Adicione outros campos conforme necessário
};

const FormDataContext = createContext<{
  formData: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  removeFields: (fields: Array<keyof FormData>) => void;  // Adicione esta linha
}>({
  formData: {},
  updateFields: () => {},
  removeFields: () => {},  // Adicione esta linha
});

export const useFormDataContext = () => {
  return useContext(FormDataContext);
}


interface FormDataProviderProps {
    children: React.ReactNode;
  }
  export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    // Quando o componente monta, verifique se há um estado armazenado
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Quando formData muda, atualize o localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log("🚀 ~ file: FormContext.tsx:47 ~ useEffect ~ formData:", formData)
  
  }, [formData]);
  
  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...fields }));
  };

  const removeFields = (fields: Array<keyof FormData>) => {
    const updatedData = { ...formData };
    fields.forEach(field => {
        delete updatedData[field];
    });
    setFormData(updatedData);
  };


  const contextValue = useMemo(() => ({
    formData,
    updateFields,
    removeFields
  }), [formData]);

  return (
    <FormDataContext.Provider value={contextValue}>
                {children}
      <button onClick={() => alert(JSON.stringify(formData, null, 2))}>
        Mostrar FormData
      </button>
    </FormDataContext.Provider>
  );
};
