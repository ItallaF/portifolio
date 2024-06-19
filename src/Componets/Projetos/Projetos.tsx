import { Title } from '../Sobre/SobreStyle';
import { ProjetoDiv, ProjetoSection, SubTitle } from './ProjetosStyle';

export function Projetos() {
  return (
    <ProjetoSection id='projetos'>
      <Title>Projetos</Title>
      <ProjetoDiv>
        <SubTitle>Reviva Fashion</SubTitle>
        <SubTitle>Talk To Me</SubTitle>
        <SubTitle>Find Book</SubTitle>
        <SubTitle>Portifolio</SubTitle>
      </ProjetoDiv>
    </ProjetoSection>
  );
};