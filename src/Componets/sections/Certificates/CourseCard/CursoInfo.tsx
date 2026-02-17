import styles from './CourseCard.module.css';

interface CourseInfoType {
  instituicao: string;
  duracao: string;
  anoConclusao: string;
}

const CourseInfo = ({
  instituicao,
  duracao,
  anoConclusao
}: CourseInfoType) => {
  return (
    <>
      <p className={styles.infoRow}>
        <strong>Instituição:</strong> {instituicao}
      </p>

      <p className={styles.infoRow}>
        <strong>Duração:</strong> {duracao}
      </p>

      <p className={styles.infoRow}>
        <strong>Ano de conclusão:</strong> {anoConclusao}
      </p>
    </>
  );
};

export default CourseInfo;
