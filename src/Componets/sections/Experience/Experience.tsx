import styles from './Experience.module.css';
import typography from '../../../Styles/typography.module.css'
import { ExperienceItem } from './ExperienceItem/ExperienceItem';
import { SectionContainer } from '../../UI/SectionContainer/SectionContainer';

export function Experience() {
  return (
    <SectionContainer id="experience" background="var(--section-experiencia)">
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={typography.sectionTitle}>Experiências</h2>
        </div>

        <ExperienceItem
          title="Desenvolvedora React Native (Júnior) - Atuação Internalizada"
          descriptions={[
            'Após a internalização da consultoria, permaneci na posição de Desenvolvedora React Native (Júnior), dando continuidade às atividades de evolução e manutenção das aplicações.',
            'Atuação integrada a times multidisciplinares, com foco em qualidade, organização de código e sustentação da arquitetura existente.',
          ]}
          skills={[
            'React Native',
            'TypeScript',
            'Stitches',
            'Git',
            'Feature Flags',
            'Docker',
            'Backend for Frontend (BFF)',
            'Inteligência Artificial como ferramenta de apoio ao desenvolvimento',
          ]}
          date="2025 – "
        />

        <ExperienceItem
          title="Desenvolvedora React Native (Júnior) – Atuação em Consultoria"
          descriptions={[
            'Atuação como desenvolvedora júnior em modelo de consultoria, trabalhando com React Native na evolução e manutenção de aplicações.',
            'Colaboração com designers, tech leads, PM e desenvolvedores, contribuindo para entregas alinhadas às necessidades do negócio e às boas práticas de desenvolvimento.',
          ]}
          skills={[
            'React Native',
            'TypeScript',
            'Stitches',
            'Git',
            'Inteligência Artificial como ferramenta de apoio ao desenvolvimento',
          ]}
          date="2025 – 2025"
        />

        <ExperienceItem
          title="Desenvolvedora Front-end Web e Mobile (Trainee)"
          descriptions={[
            'Atuação em projetos web e mobile utilizando React.js e React Native, com foco em componentização, organização de código e boas práticas de desenvolvimento.',
          ]}
          skills={[
            'Styled Components',
            'Stitches',
            'Redux',
            'Azure',
            'Git',
          ]}
          date="2022 – 2023"
        />

        <ExperienceItem
          title="Experiência com Comunicação e Web"
          descriptions={[
            'Experiência complementar na criação de artes para Instagram, desenvolvimento de cartilhas e pesquisa de ideias para clientes.',
            'Atuação também na atualização e manutenção de sites utilizando WordPress e PHP.',
          ]}
          date="2020 – 2022"
        />

      </div>
    </SectionContainer>
  );
}
