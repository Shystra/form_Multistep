// import React from 'react';
import styles from './Home.module.css'; // Importando os estilos

export function Home() {
  return (

      <div className={styles.container}>
        <div className={styles.progressBar}>
          <div className={styles.progress}>
                    <label className={styles.progressLabel}>10%</label>
          </div>
            
            <div className={styles.title_Container}>
                <h1 className={styles.title_Residencia}>Como é a sua Residência?</h1>
            </div>
            

        </div>
    </div>



  )

}