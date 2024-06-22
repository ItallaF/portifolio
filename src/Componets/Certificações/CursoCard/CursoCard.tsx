import { CardContainer, SubTitle } from './CursoCardStyle';
import CursoInfo from './CursoInfo';
import { CursoCardType } from './type';

const CursoCard = (props: CursoCardType) => {
    return (
        <CardContainer >
            <SubTitle>{props.cursoNome}</SubTitle>
            <CursoInfo
                instituicao={props.instituicao}
                duracao={props.duracao}
                anoConclusao={props.anoConclusao}
            />
        </CardContainer>
    );
};

export default CursoCard;