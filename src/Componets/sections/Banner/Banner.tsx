import styles from './Banner.module.css';
import { Linkedin, GitHub } from '../../../Icons';

export function Banner() {
  return (
    <section id="home" className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Italla Felyne</h1>
        <p className={styles.subtitle}>
          Desenvolvedora Front-End e Mobile
        </p>

        <div className={styles.buttons}>
          <a
            className={styles.button}
            href="https://www.linkedin.com/in/italla-felyne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
            <span className={styles.icon}>
              <Linkedin />
            </span>
          </a>

          <a
            className={styles.button}
            href="https://github.com/ItallaF"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <span className={styles.icon}>
              <GitHub />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
