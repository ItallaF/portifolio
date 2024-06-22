import { InfoRow } from './CursoCardStyle';

interface CursoInfoType {
  instituicao: string;
  duracao: string;
  anoConclusao: string;
};

const CursoInfo = (props: CursoInfoType) => {
  return (
    <>
      <InfoRow>
        <strong>Instituição: </strong><span>{props.instituicao}</span>
      </InfoRow>
      <InfoRow>
        <strong>Duração: </strong><span>{props.duracao}</span>
      </InfoRow>
      <InfoRow>
        <strong>Ano de conclusão: </strong><span>{props.anoConclusao}</span>
      </InfoRow>
    </>
  );
};

export default CursoInfo;
