import styles from './CursoCard.module.css';
import CursoInfo from './CursoInfo';
import { CursoCardType } from './type';

const CursoCard = ({
  cursoNome,
  instituicao,
  duracao,
  anoConclusao
}: CursoCardType) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{cursoNome}</h3>

      <CursoInfo
        instituicao={instituicao}
        duracao={duracao}
        anoConclusao={anoConclusao}
      />
    </div>
  );
};

export default CursoCard;
