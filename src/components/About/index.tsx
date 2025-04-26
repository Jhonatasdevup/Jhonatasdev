"use client";
import Image from "next/image";
import styles from "./styles.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h2 className={styles.title}>
            Eu crio <span>soluções digitais</span> para impulsionar o seu negócio.
          </h2>

          <article className={styles.description}>
            <p>
              Meu nome é <strong>Jhonatas Oliveira</strong>, sou programador formado em Análise e Desenvolvimento de Sistemas pela Estácio, com base em <strong>São José dos Campos – SP</strong>. Estou no terceiro ano da minha jornada profissional com tecnologia, criando soluções que ajudam empresas e empreendedores a conquistarem presença no ambiente digital.
            </p>
            <p>
              Tenho experiência em desenvolvimento de sistemas focados em performance, design moderno e responsividade. Busco entregar resultados com <strong>arquitetura concisa</strong> — sempre com foco na resolução de problemas e na escalabilidade dos projetos.
            </p>
          </article>

          <blockquote className={styles.mission}>
            <strong>🎯 Missão:</strong><br />
            Ajudar empresas e empreendedores a crescerem com soluções digitais inteligentes, acessíveis e de alto impacto.
          </blockquote>
        </div>

        <div className={styles.imageArea}>
          <Image
            src="/eu.png"
            alt="Foto do desenvolvedor"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
