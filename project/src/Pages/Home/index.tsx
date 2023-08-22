

import { FirstForm } from '../../components/FirstForm/FirstForm';
import { OptionUrbanHome } from '../../components/OptionUrbanHome/OptionUrbanHome';
import { OptionRuralHome } from '../../components/OptionRuralHome/OptionRuralHome';

// import { useMultistepForm } from '../../Hooks/useForme';
import styles from './Home.module.css';
import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../Hooks/useForme';



// type FormData = {
//   casa_urbana: string;
//   casa_rural: string;
//   other_itens: string;
//   teste: string;
// }

// const INITIAL_DATA: FormData = {
//   casa_urbana: "",
//   casa_rural: "",
//   other_itens: "",
//   teste: "",
// }

export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  // const [data, setData] = useState<FormData>(INITIAL_DATA);

  // const {back, next} = useMultistepForm([
  // <FirstForm {...data}/>,
  // <OptionUrbanHome {...data}/>,
  // <OptionRuralHome {...data}/>,
  // ])

  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    setCurrentStep(1);
  };


  // function onSubmit(e: FormEvent){
  //   e.preventDefault();
  //   next()
  // }

  



  return (
    <form >
      <div className={styles.container}>
        {currentStep === 0 && (
            <>
          <div className={styles.progressBar}>
            <div className={styles.progressOne}>
              <label className={styles.progressLabel}>10%</label>
            </div>
          <div className={styles.title_Container}>
            <h1 className={styles.title_Residencia}>Como é a sua Residência?</h1>
          </div>
          </div>
          </>
        )}
        {currentStep === 0 && <FirstForm onNext={handleChoice} />}

        {/* {currentStep === 0 && (
        )} */}
  
        {currentStep === 1 && userChoice === "casa_urbana" && <OptionUrbanHome />}
        {currentStep === 1 && userChoice === "casa_rural" && <OptionRuralHome />}
      </div>
    </form>
  );

}