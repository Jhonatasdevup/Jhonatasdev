import styles from "./page.module.css";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import MyProjects from "@/components/MyProjects";
import EducationCertifications from "@/components/EducationCertifications";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Foot";
import BannerHome from "@/components/BannerHome";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButtom";

export default function Home() {
  return (
    <div className={styles.page}>
     <Header/>
     <BannerHome/>
     <About/>
     <Skills/>
     <MyProjects/>
     <EducationCertifications/>
     <ContactForm/>
     <CookieConsent/>
     <WhatsAppButton/>
     <Footer/>
    </div>
  );
}
