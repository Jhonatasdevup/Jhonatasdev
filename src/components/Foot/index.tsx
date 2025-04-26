// components/Footer/Footer.tsx
import styles from './styles.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><Link href="#inicio">Início</Link></li>
            <li><Link href="#about">Sobre mim</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#projetos">Projetos</Link></li>
            <li><Link href="#educacao">Educação e Certificações</Link></li>
            <li><Link href="#contato">Contato</Link></li>
            <li><Link href="/PoliticaDePrivacidade">Política de privacidade</Link></li>
          </ul>
        </nav>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} JhonatasDev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
