import styles from './CourseCard.module.css';
import CourseInfo from './CursoInfo';
import { CourseCardType } from './type';

const CourseCard = ({
  cursoNome,
  instituicao,
  duracao,
  anoConclusao
}: CourseCardType) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{cursoNome}</h3>

      <CourseInfo
        instituicao={instituicao}
        duracao={duracao}
        anoConclusao={anoConclusao}
      />
    </div>
  );
};

export default CourseCard;
