import styles from './DescubraOpc.module.css';
import descubraImg1 from "../../assets/semEfeitoImg1.jpg"
import descubraImg2 from "../../assets/semEfeitoImg2.jpg"

export const DescubraOpc = () => {
    return(
        <>
        <div className={styles.containeGeral}>
        <div className={styles.containerUm}>
          <h2 className={styles.title}>CRIATIVIDADE AUDIOVISUAL</h2>
          <img className={styles.img} src={descubraImg1} alt="" />
          <p className={styles.descricao}>A TC|CINE tem o compromisso com a inovação criativa no setor audiovisual Brasileiro.</p>
        </div>

        <div className={styles.containeUM}>
          <h2 className={styles.title}>TECNOLOGIA AUDIOVISUAL</h2>
          <img className={styles.img} src={descubraImg2} alt="" />
          <p className={styles.descricao}>A TC|CINE estuda e aplica novas tecnicas e métodos para a qualidade estrutural, visul, e sonora em seus resultados.</p>
        </div>
        </div>
        </>
    )
}