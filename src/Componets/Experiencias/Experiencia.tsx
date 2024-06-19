import { Title } from '../Sobre/SobreStyle';
import { DivText, DivTitle, ExperienciaSection, SubTitle, Text, TextDestac } from './ExperienciaStyle';

export function Experiencia() {
  return (
    <ExperienciaSection id='experiencias'>
      <DivTitle>
        <Title>Experiências</Title>
      </DivTitle>
      <DivText>
        <SubTitle>Desenvolvedora de Sistemas Trainee</SubTitle>
        <Text> Minha primeira experiencia no mercado de trabalho como desenvolvedora,
          foi como Trainee por quase um ano, como desenvolvedora front-end, atuando
          em projetos mobile e web utilizando o React Native e React Js, atuava em uma equipe
          composta por nove pessoas, também obtive experiência com Styled Components, Stiches,
          Redux, Azure e Git.
        </Text>
        <TextDestac> 2022-2023 </TextDestac>
      </DivText>
      <DivText>
        <SubTitle>Ajudante de design Artes Gráficas</SubTitle>
        <Text> Atuei na criação de artes para Instagram, cartilhas, pesquisas de ideias para clientes 
          buscando ideias para design e atualização de sites com Wordpress e PHP.
        </Text>
        <TextDestac> 2020-2022 </TextDestac>
      </DivText>
    </ExperienciaSection>
  );
};