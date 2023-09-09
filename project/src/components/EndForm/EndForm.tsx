import styles from './EndForm.module.css';

[]
type Props = {
    onNext: (value: string) => void;
    onBack: () => void;
}
export const EndForm = ({ }: Props) => {
    return (
        <div className={styles.container_end}>
            
            <>
                <label className={styles.name}>Nome</label>
                <input type="text" />

                <label className={styles.cep}>CEP do Imóvel</label>
                <input type="text" />


                <label className= {styles.email}>E-mail</label>
                <input type="text" />

                <label className={styles.phone}>Telefone</label>
                <input type="text" />
            

            <div className={styles.wrapperbuttons}>
           
             <div className={styles.back}>
                    <button>Voltar</button>
                </div>
                
                <div className={styles.send}>
                    <button>Enviar</button>
                </div>
           
            </div>
          </>
        

        </div>
        
    )
}