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
                <label>Nome</label>
                <input type="text" />

                <label>CEP do Imóvel</label>
                <input type="text" />


                <label>E-mail</label>
                <input type="text" />

                <label>Telefone</label>
                <input type="text" />
            
          </>
        

        </div>
        
    )
}