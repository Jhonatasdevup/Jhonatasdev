'use client'

import React from 'react'
import styles from './styles.module.css'
import SchoolIcon from '@mui/icons-material/School';

export default function EducationCertifications() {

    const data = [
      'Curso HTML5 e CSS3 - Curso em vídeo',
      'Javascript - Curso em vídeo',
      'React Native: Desenvolva APPs Nativas para Android e iOS - Cod3r', 
      'React do Zero a Maestria (c/ hooks, router, API, Projetos) - Hora de Codar',
      'Curso de JavaScript e TypeScript do básico ao avançado JS/TS - Hora de Codar',
      'Node.js do Zero a Maestria - Hora de Codar',
      'NextJS do zero ao avançado - Udemy'
    ]
  return (
    <section className={styles.educationSection} id='educacao'>
      <h2 className={styles.title}>Educação e Certificações</h2>

      <div className={styles.card}>
        <h3 className={styles.subtitle}>Universidade</h3>
        <div className={styles.universityCard}>
          <div className={styles.logoPlaceholder}>
            <SchoolIcon fontSize="large"/>
          </div>
          <div className={styles.universityInfo}>
            <h5 className={styles.courseName}>Faculdade Estácio - Análise e Desenvolvimento de Sistemas (ADS)</h5>
            <p>Análise e Desenvolvimento de Sistemas (ADS) é um curso superior voltado para a formação de profissionais capacitados a desenvolver, implementar e gerenciar sistemas de software. A graduação combina fundamentos de programação, banco de dados, engenharia de software e infraestrutura, preparando o aluno para resolver problemas reais com soluções tecnológicas eficientes e inovadoras.
            </p>
            <p className={styles.period}>2022 - Presente</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.subtitle}>Cursos</h3>
        <ul className={styles.courseList}>
            {data.map((Courses,i) => (
                <li className={styles.courseItem} key={i}>{Courses}</li>
            ))}
        </ul>
      </div>
    </section>
  )
}
