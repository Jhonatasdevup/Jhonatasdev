import Link from "next/link";
import styles from "./politica.module.css";

export default function PoliticaDePrivacidade() {
  return (
    <div className={styles.container}>

      <h2>Jhonatas.Dev</h2>
      <h1 className={styles.h1}>Política de Privacidade</h1>

      <p className={styles.p}>
        A sua privacidade é importante para nós. É política da KSERVICE Assistência Técnica respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site KSERVICE Assistência Técnica, e outros sites que possuímos e operamos.
      </p>

      <p className={styles.p}>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
      </p>

      <p className={styles.p}>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
      </p>

      <p className={styles.p}>
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
      </p>

      <p className={styles.p}>
        O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
      </p>

      <p className={styles.p}>
        Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
      </p>

      <p className={styles.p}>
        O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
      </p>

      < h2 className={styles.h2}>Publicidade e Cookies</h2>
      <p className={styles.p}>
        O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
      </p>
      <p className={styles.p}>
        Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível.
      </p>
      <p className={styles.p}>
        Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros.
      </p>

      <h2 className={styles.h2}>Compromisso do Usuário</h2>
      <p className={styles.p}>O usuário se compromete a:</p>
      <ul className={styles.ul}>
        <li className={styles.li}>Não se envolver em atividades ilegais ou contrárias à boa fé e à ordem pública;</li>
        <li className={styles.li}>Não difundir propaganda de natureza racista, xenofóbica ou contra os direitos humanos;</li>
        <li className={styles.li}>Não causar danos aos sistemas físicos ou lógicos do KSERVICE ou de terceiros;</li>
      </ul>

      <h2 className={styles.h2}>Mais informações</h2>
      <p className={styles.p}>
        Esta política é efetiva a partir de 17 de abril de 2025 às 14:33.
      </p>

      <h1 className={styles.h1}>Termos e Condições</h1>

      <h2 className={styles.h2}>1. Termos</h2>
      <p className={styles.p}>
        Ao acessar ao site KSERVICE Assistência Técnica, você concorda com estes termos de serviço. Se não concordar com algum deles, não utilize o site.
      </p>

      <h2 className={styles.h2}>2. Uso de Licença</h2>
      <p className={styles.p}>
        É concedida permissão para baixar temporariamente uma cópia dos materiais apenas para visualização pessoal e não comercial.
      </p>
      <ul>
        <li>Você não pode modificar, copiar ou usar os materiais para fins comerciais;</li>
        <li>Não pode descompilar ou fazer engenharia reversa do site;</li>
        <li>Deve apagar os materiais ao final do uso;</li>
      </ul>

      <h2 className={styles.h2}>3. Isenção de responsabilidade</h2>
      <p className={styles.p}>
        O site é fornecido como está. Não garantimos que o conteúdo seja livre de erros ou completo.
      </p>

      <h2 className={styles.h2}>4. Limitações</h2>
      <p className={styles.p}>
        KSERVICE não será responsável por danos decorrentes do uso ou da incapacidade de usar os materiais no site.
      </p>

      <h2 className={styles.h2}>5. Precisão dos materiais</h2>
      <p className={styles.p}>
        Os materiais podem conter erros. Não garantimos que estejam atualizados ou completos.
      </p>

      <h2 className={styles.h2}>6. Links</h2>
      <p className={styles.p}>
        Não nos responsabilizamos por sites externos com links no nosso site.
      </p>

      <h2 className={styles.h2}>Modificações</h2>
      <p className={styles.p}>
        Podemos revisar estes termos a qualquer momento, sem aviso prévio.
      </p>

      <h2 className={styles.h2}>Lei aplicável</h2>
      <p className={styles.p}>
        Estes termos são regidos pelas leis do Brasil. Você se submete à jurisdição dos tribunais de São Paulo.
      </p>

      <div className={styles.backButtonWrapper}>
        <Link href="/">
          <button className={styles.backButton}>Voltar para a página inicial</button>
        </Link>
      </div>
    </div>
  );
}
