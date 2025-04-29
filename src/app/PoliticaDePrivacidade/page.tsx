"use client";

import Link from "next/link";
import styles from "./politica.module.css";

export default function PoliticaDePrivacidade() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Política de Privacidade e Termos de Uso</h1>

      <section className={styles.section}>
        <h2 className={styles.h2}>1. Informações Coletadas</h2>
        <p className={styles.p}>
          Ao utilizar nossos serviços, podemos coletar informações fornecidas
          por você, como nome, e-mail e número de telefone, para fins de contato
          e atendimento.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>2. Uso das Informações</h2>
        <p className={styles.p}>
          As informações coletadas são utilizadas exclusivamente para fornecer
          e aprimorar nossos serviços de criação de sites, aplicativos e
          outros serviços relacionados à tecnologia.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>3. Compartilhamento de Informações</h2>
        <p className={styles.p}>
          Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para a execução dos serviços contratados ou exigido
          por lei.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>4. Segurança</h2>
        <p className={styles.p}>
          Adotamos medidas de segurança para proteger suas informações contra
          acesso não autorizado, alteração, divulgação ou destruição.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>5. Seus Direitos</h2>
        <p className={styles.p}>
          Você tem o direito de acessar, corrigir ou excluir suas informações
          pessoais a qualquer momento. Para isso, entre em contato conosco pelo
          e-mail fornecido abaixo.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>6. Alterações nesta Política</h2>
        <p className={styles.p}>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Recomendamos que você revise esta página regularmente para estar
          ciente de quaisquer alterações.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>7. Contato</h2>
        <p className={styles.p}>
          Se você tiver alguma dúvida sobre esta Política de Privacidade e
          Termos de Uso, entre em contato conosco pelo e-mail:{" "}
          <a href="mailto:jhonatasdeveloper@gmail.com" className={styles.link}>
          jhonatasdeveloper@gmail.com
          </a>
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.p}>
          Esta política é válida a partir de 27 de abril de 2025.
        </p>

        <Link href="/" className={styles.button}>
          Voltar para a página inicial
        </Link>
      </footer>
    </div>
  );
}
