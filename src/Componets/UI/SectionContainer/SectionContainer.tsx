import styles from './SectionContainer.module.css';

interface Props {
  children: React.ReactNode;
  id?: string;
  background?: string;
}

export const SectionContainer = ({ children, id, background }: Props) => {
  return (
    <section id={id} style={{ background }} className={styles.section}>
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  );
};