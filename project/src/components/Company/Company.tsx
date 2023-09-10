import styles from './Company.module.css';

type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const Company = ({}: Props) => {
    


    return (
        <div className={styles.container_option_company}>
            <>
            <div className={styles.progressOne_option_company}></div>
                <label className={styles.progressLabel_option_company}></label>
                    <h1 className={styles.title_option_company}>
                        Selecione uma das opções:</h1>

            <div className={styles.buttonsWrapper_option_company}>
                <div className={styles.option_street_commerce}>
                    <button>Comércio de Rua</button>
                </div>

                <div className={styles.option_company_shopping_center}>
                    <button>Empresa em centro comercial</button>
                </div>

                <div className={styles.option_company_industrial_area}>
                    <button>Empresa em área industrial</button>
                </div>

                <div className={styles.optio_business_building}>
                    <button>Prédio comercial</button>
                </div>
            </div>

            <div className={styles.button_back}>
                <button>Voltar</button>
            </div>
            
            </>


        </div>
    )
};