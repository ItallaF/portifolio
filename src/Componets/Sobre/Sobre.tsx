import { Girl } from '../../Icons';
import { DivText, ImgDiv, SobreSection, Text, Title } from './SobreStyle';

export function Sobre() {
  return (
    <SobreSection id='sobreMim'>
      <Title>Sobre Mim</Title>
      <DivText>
        <Text> Olá! Sou Técnica em Informática para Internet e Bacharela em Sistemas da Informação,
          ambos pelo Instituto Federal do Norte de Minas Gerais.
          Durante o curso Técnico conheci a área da programação e me apaixonei por ela,
          nascendo assim o desejo de atuar na área, me levando a entrar no curso superior em 2019
          concluindo-o em 2022. Durante o curso participei de diversos projetos com HTML5,
          CSS3, React Native, JavaScript, Typescript e node.js e Python.
          Em 2022 entrei no programa Up!Tech da Riachuelo onde atuei como Trainee, onde obtive uma maior
          experiência do mercado de trabalho atuando em uma equipe de 9 pessoas, onde atuei como desenvolvedora
          Front-End Web e Mobile utilizando React.JS e React Native. Estou sempre em busca de aprimorar
          meus conhecimentos e minhas habilidades uma vez que acredito que a tecnologia
          está em constante evolução, se pararmos ficamos atrasados. No momento estou estudando Ingles e buscando
          o desenvolvimento Fullstack.</Text>
        <ImgDiv>
          <Girl />
        </ImgDiv>
      </DivText>
    </SobreSection>
  );
};