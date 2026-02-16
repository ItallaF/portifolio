import styles from './CursoCard.module.css';

interface CursoInfoType {
  instituicao: string;
  duracao: string;
  anoConclusao: string;
}

const CursoInfo = ({
  instituicao,
  duracao,
  anoConclusao
}: CursoInfoType) => {
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

export default CursoInfo;
