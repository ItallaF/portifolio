import { Title } from '../Sobre/SobreStyle';
import { DivText, DivTitle, ExperienciaSection,SubTitle,Text, TextDestac } from './ExperienciaStyle';

export function Experiencia() {
  return (
    <ExperienciaSection>
      <DivTitle>
        <Title>Experiências</Title>
      </DivTitle>
      <DivText>
        <SubTitle>Desenvolvedora de Sistemas Trainee</SubTitle>
        <Text> Minha primeira experiencia no mercado de trabalho como desenvolvedora,
          foi como Trainee por quase um ano, como desenvolvedora front-end, atudando
          em projetos mobile e web utilizando o React Native e React Js, atuava em uma equipe
          composta por nove pessoas, também obtive experiência com Styled Components, Stiches,
          Redux, Azure e Git.</Text>
          <TextDestac> 2022-2023 </TextDestac>
        
      </DivText>
    </ExperienciaSection>
  );
};