import { Title } from '../Sobre/SobreStyle';
import { Button, ButtonDiv, ButtonLink, DivImg, Img, ItemDiv, ProjetoDiv, ProjetoSection, SubTitle, Text, TextDestac } from './ProjetosStyle';
import clothes from '../../assets/img/Clothes.jpg';
import findbook from '../../assets/img/FindBook.jpg';
import talktome from '../../assets/img/TalkToMe.jpg';


export function Projetos() {
  return (
    <ProjetoSection id='projetos'>
      <Title>Projetos</Title>
      <ProjetoDiv>
        <ItemDiv>
          <DivImg>
            <Img src={clothes} />
          </DivImg>
          <SubTitle>Reviva Fashion</SubTitle>
          <Text>Projeto desenvolvido a partir do programa Up!Tech da Riachuelo em
            parceria com a Alura, nele foi desenvolvida uma página de
            compras, uma página de detalhes do produto e a navegação para a página da sacola.
          </Text>
          <TextDestac>Tecnologias utilizados no projeto: JavaScript, Sass, React JS, TypeScript,
            StyledComponents e Next.
          </TextDestac>
          <ButtonDiv>
            <ButtonLink href='https://uptech-reviva-react-next-xi.vercel.app/'>
              <Button>
                Projeto
              </Button>
            </ButtonLink>
            <ButtonLink href='https://github.com/ItallaF/uptech-reviva-react-next/tree/Semana-10'>
              <Button>
                Código
              </Button>
            </ButtonLink>
          </ButtonDiv>
        </ItemDiv>
        <ItemDiv>
          <DivImg>
            <Img src={talktome} />
          </DivImg>
          <SubTitle>Talk To Me</SubTitle>
          <Text>Projeto desenvolvido a partir da Semana do Herói da Hero Code, nele foi desenvolvido
            duas páginas sendo a página inicial para ingressar ou criar uma nova reunião e a pagina
            da reunião online.
          </Text>
          <TextDestac>Tecnologias utilizados no projeto: React JS, TypeScript, Tailwind, Websocket e Next.
          </TextDestac>
          <ButtonDiv>
            <ButtonLink href='https://talk-to-me-beta.vercel.app/'>
              <Button>
                Projeto
              </Button>
            </ButtonLink>
            <ButtonLink href='https://github.com/ItallaF/Talk-to-me/tree/master/frontend'>
              <Button>
                Código
              </Button>
            </ButtonLink>
          </ButtonDiv>
        </ItemDiv>
        <ItemDiv>
          <DivImg>
            <Img src={findbook} />
          </DivImg>
          <SubTitle>Find Book</SubTitle>
          <Text>Projeto desenvolvido a partir da Semana do Herói da Hero Code, nele foi desenvolvido duas páginas
            sendo a página inicial a página onde é apresentado diversos livros e a segunda os livros com
            detalhes.
          </Text>
          <TextDestac>Tecnologias utilizados no projeto: React JS, TypeScript, Tailwind, Vite e MongoDb.
          </TextDestac>
          <ButtonDiv>
            <ButtonLink href='https://find-book-olive.vercel.app/'>
              <Button>
                Projeto
              </Button>
            </ButtonLink>
            <ButtonLink href='https://github.com/ItallaF/FindBook/tree/main/frontend'>
              <Button>
                Código
              </Button>
            </ButtonLink>
          </ButtonDiv>
        </ItemDiv>
        <ItemDiv>
          <DivImg>
            <Img src={clothes} />
          </DivImg>
          <SubTitle>Portifolio</SubTitle>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis fringilla dapibus.
            Vestibulum id placerat erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nulla id iaculis ligula, at condimentum magna.
          </Text>
          <TextDestac>Curabitur condimentum risus non ipsum lacinia bibendum.
          </TextDestac>
          <ButtonDiv>
            <ButtonLink href='https://'>
              <Button>
                Projeto
              </Button>
            </ButtonLink>
            <ButtonLink href='https://'>
              <Button>
                Código
              </Button>
            </ButtonLink>
          </ButtonDiv>
        </ItemDiv>
      </ProjetoDiv>
    </ProjetoSection>
  );
};