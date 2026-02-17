import styles from '../Experience.module.css';

type ExperienceItemProps = {
  title: string;
  descriptions: string[];
  skills?: string[];
  date: string;
};

function SkillList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function ExperienceItem({
  title,
  descriptions,
  skills,
  date,
}: ExperienceItemProps) {
  return (
    <article className={styles.item}>
      <h3 className={styles.subTitle}>{title}</h3>

      {descriptions.map((text, index) => (
        <p key={index} className={styles.text}>
          {text}
        </p>
      ))}

      {skills && (
        <>
          <p className={styles.textStrong}>Experiência com:</p>
          <SkillList items={skills} />
        </>
      )}

      <span className={styles.date}>{date}</span>
    </article>
  );
}