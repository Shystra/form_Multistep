import { useState, useEffect } from 'react';
import styles from './Urban_or_Rural.module.css';

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


export const Urban_or_Rural = ({ 
  casa_urbana, 
  casa_rural, 
  updateFields = () => {}, 
  onNext, 
}: FormProps) => {



  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleOptionClick = (option: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedValue(option);
  };
  
  useEffect(() => {
    if (selectedValue) {
      updateFields({ [selectedValue]: selectedValue } as Partial<FormData>);
      onNext(selectedValue);
    }
  }, [selectedValue, updateFields, onNext]);
  // console.log("🚀 ~ file: FirstForm.tsx:43 ~ selectedValue:", selectedValue)
  
  



  return (
    <form className={styles.containerForm}>
      <div className={styles.buttonsWrapper}>
        <div className={styles.casaUrbana}>
          <button className={styles.casaUrbanaButton} value={casa_urbana} onClick={handleOptionClick('casa_urbana')}>
            Casa em área Urbana
          </button>
          
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