import { Girl } from '../../Icons';
import styles from './Sobre.module.css';
import typography from '../Styles/typography.module.css';

export function Sobre() {
  return (
    <section id='sobreMim' className={styles.sobreSection}>
      <h2 className={typography.sectionTitle}>Sobre Mim</h2>
      <div className={styles.divText}>
        <div className={styles.text}> 
          <p>Sou Técnica em Informática para Internet e Bacharela em Sistemas de Informação
            pelo Instituto Federal do Norte de Minas Gerais.</p>
          <p>Minha trajetória na tecnologia começou ainda no curso técnico, quando conheci a programação
            e decidi construir minha carreira na área. Desde então, venho direcionando minha formação e
            experiências para o desenvolvimento de soluções digitais eficientes e bem estruturadas.</p>
          <p>Ingressei na graduação em 2019 e concluí em 2022, período em que participei de projetos
            utilizando HTML5, CSS3, JavaScript, TypeScript, React.js, React Native, Node.js e Python,
            consolidando minha base técnica tanto para web quanto para mobile.</p>
          <p>Em 2022, iniciei minha experiência profissional no programa Up!Tech da Riachuelo, atuando como
            Desenvolvedora Trainee. Trabalhei como Desenvolvedora Front-end Web e Mobile, em uma equipe
            multidisciplinar com nove profissionais, contribuindo para a construção e evolução de aplicações
            com foco em qualidade e organização de código.</p>
          Estou sempre em constante evolução, estudando inglês e aprofundando meus conhecimentos para atuar
          como desenvolvedora Fullstack.
          </div>
        <div className={styles.ImgDiv}>
          <Girl />
        </div>
      </div>
    </section>
  );
};