'use client'

import React, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const projetosData = [
  {
    id: 1,
    type: 'Web',
    img: '/projetos/projetokevin.png',
    titulo: 'Site Institucional KSERVICE',
    descricao:
      'Desenvolvimento de uma landing page institucional para a KSERVICE, empresa de assistência técnica especializada em linha branca. O site inclui um formulário de contato funcional com envio via e-mail, SEO otimizado para melhorar a visibilidade no Google e design responsivo adaptado para todos os dispositivos.',
    tecnologias: ['HTML5', 'CSS3', 'Next.js', 'Nodemailer', 'Material UI']
  },
  {
    id: 2,
    type: 'Mobile',
    img: '/projetos/rsabinoprojeto.png',
    titulo: 'App RSABINO',
    descricao:
      'Aplicativo educacional criado para facilitar a aplicação de provas e testes em sala de aula por professores. Com integração ao Firebase, oferece autenticação segura, banco de dados em tempo real e um layout intuitivo para uma experiência fluida tanto para alunos quanto para educadores.',
    tecnologias: ['React Native', 'Expo', 'Firebase']
  },
  {
    id: 3,
    type: 'Web',
    img: '/projetos/almigprojeto.png',
    titulo: "Site Institucional e Catálogo ALMIG Epi's",
    descricao:
      'Criação do site institucional da ALMIG, loja especializada em EPI’s, abrasivos e ferramentas. O projeto inclui catálogo virtual de produtos com navegação intuitiva, carrossel de imagens, formulário de contato integrado e layout responsivo. Ideal para reforçar a presença digital da empresa e atrair novos clientes.',
    tecnologias: ['HTML5', 'CSS3', 'Next.js', 'Nodemailer', 'Material UI', 'swiper']
  },
  {
    id: 4,
    type: 'Web',
    img: '/projetos/excelcolors.png',
    titulo: 'Site Institucional Excel Colors',
    descricao:
      'Desenvolvimento do site institucional da Excel Colors, empresa especializada em pintura eletrostática e jateamento de peças metálicas. O site destaca os serviços com um design moderno e responsivo, além de apresentar seções explicativas sobre os processos, diferenciais da empresa e um formulário de contato funcional. O conteúdo é otimizado para SEO, reforçando a presença digital da marca e facilitando o alcance de novos clientes.',
    tecnologias: ['HTML5', 'CSS3', 'Next.js', 'Nodemailer', 'Material UI']
  },
];


const tipos = ['Todos', 'Web', 'Mobile'];

export default function MyProjects() {
  const [filtro, setFiltro] = useState('Todos');

  const projetosFiltrados = filtro === 'Todos' 
    ? projetosData 
    : projetosData.filter(p => p.type.includes(filtro));

  return (
    <section className={styles.projetosSection} id='projetos'>
      <h2 className={styles.titulo}>Projetos</h2>

      <div className={styles.filtros}>
        {tipos.map(tipo => (
          <button 
            key={tipo} 
            onClick={() => setFiltro(tipo)} 
            className={`${styles.botaoFiltro} ${filtro === tipo ? styles.ativo : ''}`}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className={styles.listaProjetos}>
        {projetosFiltrados.map((projeto) => (
          <div key={projeto.id} className={styles.cardProjeto}>
            <Image 
              src={projeto.img} 
              alt={projeto.titulo} 
              width={300} 
              height={180} 
              className={styles.imagemProjeto}
            />
            <div className={styles.infoProjeto}>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <div className={styles.tecnologiasUsadas}>
                {projeto.tecnologias.map((tec, index) => (
                  <span key={index} className={styles.tagTecnologia}>{tec}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
