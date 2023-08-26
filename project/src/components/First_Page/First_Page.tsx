import styles from './First_Page.module.css';

export const First_Page = () => {
    
    
    
    
    
    
    
    
    
    
    
    return (

    <form className={styles.container_first_page}>
        <div className={styles.wrapper_first_page}>
                <div className={styles.residencia}>
                    <button className={styles.residencia_button}>Residência</button>
                </div>
                <div className={styles.empresa_comercio}>
                    <button className={styles.empresa_comercio_button}>Empresa/ Comércio</button>
                </div>

                <div className={styles.condominio}>
                    <button className={styles.condominio_button}>Condomínio</button>
                </div>
            </div>
    </form>

    )
}