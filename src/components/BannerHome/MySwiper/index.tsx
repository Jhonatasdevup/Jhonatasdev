"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./styles.module.css";

import useWindowSize from '@/func/useWindowSize'

const services = [
  {
    title: "Aplicativo Mobile",
    description: "Desenvolvimento de aplicativos modernos para Android e iOS, com foco em performance e usabilidade.",
    img: "/hero/aplicativo-mobile.png",
  },
  {
    title: "Seu site",
    description: "Eu entendo que cada pessoa e negócio têm suas necessidades únicas. Crio sites sob medida para você.",
    img: "/hero/seu-site.png",
  },
  {
    title: "Site de Portfólio",
    description: "Ideal para apresentar seus projetos, trabalhos ou carreira de forma elegante e profissional.",
    img: "/hero/site-portfolio.png",
  },
  {
    title: "Site Catálogo",
    description: "Perfeito para exibir seus produtos e serviços com organização, sem necessariamente vender online.",
    img: "/hero/site-catalogo.png",
  },
  {
    title: "Blog pessoal e corporativo",
    description: "Compartilhe ideias, artigos e novidades com um blog sob medida para sua marca ou projeto pessoal.",
    img: "/hero/blog.png",
  },
  {
    title: "Landing Page",
    description: "Página focada em conversão, ideal para campanhas de marketing, produtos ou serviços específicos.",
    img: "/hero/landing-page.png",
  },
  {
    title: "Site institucional",
    description: "A vitrine digital do seu negócio. Transmita confiança e mostre ao mundo quem é sua empresa.",
    img: "/hero/site-institucional.png",
  },
];

export default function HeroSwiper() {
  const windowsSize = useWindowSize()
  const width = windowsSize.width ?? 0

  const isCell = width <= 960

  return (
    <div className={styles.wrapper}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={!isCell}
          pagination={true}
          modules={[ Autoplay,Pagination, Navigation]}
          className={styles.swiperContainer}
        >
        {services.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
