import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Skills() {
  const data = [
    {
      id: 1,
      img: "/imgs/html5.png",
      skill: "HTML 5",
      description: "Linguagem de marcação utilizada para estruturar o conteúdo da web."
    },
    {
      id: 2,
      img: "/imgs/css3.png",
      skill: "CSS 3",
      description: "Estilização de páginas web com cores, layouts responsivos e animações."
    },
    {
      id: 3,
      img: "/imgs/javascript.png",
      skill: "JavaScript",
      description: "Linguagem de programação essencial para interatividade no front-end."
    },
    {
      id: 4,
      img: "/imgs/TypeScript.png",
      skill: "TypeScript",
      description: "Superset do JavaScript que adiciona tipagem estática ao código."
    },
    {
      id: 5,
      img: "/imgs/react.png",
      skill: "React JS",
      description: "Biblioteca JavaScript para construção de interfaces de usuário reativas e eficientes."
    },
    {
      id: 6,
      img: "/imgs/nextjs.png",
      skill: "Next.js",
      description: "Framework React com renderização do lado do servidor e geração de sites estáticos."
    },
    {
      id: 7,
      img: "/imgs/React.png",
      skill: "React Native",
      description: "Framework para criação de aplicativos móveis nativos com React."
    },
    {
      id: 8,
      img: "/imgs/expo.png",
      skill: "Expo",
      description: "Plataforma para desenvolvimento de apps React Native de forma rápida e simples."
    },
    {
      id: 9,
      img: "/imgs/Firebase.png",
      skill: "Firebase",
      description: "Plataforma da Google com serviços como autenticação, banco de dados e hosting."
    },
    {
      id: 10,
      img: "/imgs/front.jpg",
      skill: "Desenvolvedor Front-end",
      description: "Profissional responsável por construir a interface visual e interativa de aplicações web e mobile."
    }
  ];
  
  
  return (
    <section className={styles.sectionMain} id='skills'>
      <h2 className={styles.title}>Minhas Skills</h2>
      <div className={styles.divSkills}>
        {data.map(skill => (
          <div key={skill.id} className={styles.divSkill}>
              <Image src={skill.img} alt={skill.skill} width={80} height={80}/>
              <h3 className={styles.nameskill}>{skill.skill}</h3>
              <p className={styles.descriptionSkill}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
