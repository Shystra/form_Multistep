// FormContext.tsx

import { createContext, useContext, useEffect, useState } from 'react';

type FormData = {
  residencia?: string;
  casa_urbana?: string;
  casa_rural?: string;
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

export const FormDataProvider: React.FC = ({ children }: any) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...fields }));
  };

  const removeFields = (fields: Array<keyof FormData>) => {  // Adicione esta função
    const updatedData = { ...formData };
    fields.forEach(field => {
        delete updatedData[field];
    });
    setFormData(updatedData);
  };

  useEffect(() => {
    console.log('FormData atual:', formData);
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, updateFields, removeFields }}>  // Atualize aqui
      {children}
      <button onClick={() => alert(JSON.stringify(formData, null, 2))}>
        Mostrar FormData
      </button>
    </FormDataContext.Provider>
  );
};
