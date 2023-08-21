import { useState, useEffect, FormEvent } from 'react';
import styles from './FirstForm.module.css';
// import { useMultistepForm } from '../../Hooks/useForme';
// import { OptionUrbanHome } from '../OptionUrbanHome/OptionUrbanHome';
// import { OptionRuralHome } from '../OptionRuralHome/OptionRuralHome';


type FormData = {
  casa_urbana: string;
  casa_rural: string;
  onNext: (value: string) => void;
};

const INITIAL_DATA: FormData = {
  casa_urbana: "casa_urbana",
  casa_rural: "casa_rural",
  onNext: () => {} // função vazia apenas para fornecer um valor inicial
};

type FormProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};


export const FirstForm = ({ 
  casa_urbana, 
  casa_rural, 
  updateFields = () => {}, 
  onNext, 
}: FormProps) => {

  const [values, setValues] = useState<string[]>([]);

  // Monitorar mudanças nos valores
  useEffect(() => {
    // Se houver valores, atualizamos os campos e chamamos onNext
    if (values.length > 0) {
      const option = values[values.length - 1]; // Pegar o último valor
      updateFields({ [option]: option } as Partial<FormData>);
      onNext(option);
    }
  }, [values, updateFields, onNext]);
  console.log("🚀 ~ file: FirstForm.tsx:30 ~ useEffect ~ values:", values)

  const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setValues(prevValues => [...prevValues, option]);
  };

  return (
    <form className={styles.containerForm}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.casaUrbana}>
          <button className={styles.casaUrbanaButton} value={casa_urbana} onClick={handleOptionClick('casa_urbana')}>
            Casa em área Urbana
          </button>
          {/* <button onClick={() => alert(JSON.stringify(values))}>
            Mostrar Valores
          </button> */}
        </div>

        <div className={styles.casaRural}>
            <button className={styles.casaRuralButton} value={casa_rural} onClick={handleOptionClick('casa_rural')}>
            Casa em área Rural
          </button>
        </div>
      </div>
    </form>
  );
};