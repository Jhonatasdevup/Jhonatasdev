import MySwiper from "./MySwiper";
import styles from "./styles.module.css";


export default function BannerHome() {
  return (
    <section className={styles.hero}>


        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Criação de <span>Sites</span> e <span>Apps Mobile</span>
          </h1>
          <section className={styles.description}>
            <p className={styles.description}>
              Desenvolvo <strong>soluções digitais personalizadas</strong> que combinam tecnologia de ponta, design moderno e foco total em performance. Meu objetivo é transformar ideias em projetos reais, funcionais e com aparência profissional.
            </p>
            <p className={styles.description}>
              Atuo na criação de <strong>sites institucionais, landing pages, sistemas web</strong> e <strong>aplicativos mobile</strong> para Android e iOS. Todos os projetos são pensados para oferecer uma <em>experiência fluida, responsiva</em> e adaptada a diferentes dispositivos.
            </p>
            <p className={styles.description}>
              Seja para destacar a presença digital da sua empresa, aumentar conversões ou apresentar seu portfólio de forma profissional, estou aqui para entregar soluções que realmente façam a diferença.
            </p>
          </section>
          <div className={styles.swiper}>
            <MySwiper />
          </div>
        </div>

    </section>
  );
}
