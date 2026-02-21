import styles from './SkillList.module.css';

export function SkillList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
