import styles from './Projects.module.css';
import typography from '../../../Styles/typography.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { projects } from '../../../Data/Projects';
import { SectionContainer } from '../../UI/SectionContainer/SectionContainer';



export function Projects() {

  return (
    <SectionContainer id="projects" background="var(--section-projetos)">
      <h2 className={typography.sectionTitle}>Projetos</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={styles.tech}>{project.tech}</span>

              <div className={styles.buttons}>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Projeto
                  </a>
                )}

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
