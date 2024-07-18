import { Title } from '../Sobre/SobreStyle';
import { Button, ButtonDiv, ButtonLink, Carouseltem, DivImg, Img, ProjetoDiv, ProjetoSection, SubTitle, Text, TextDestac } from './ProjetosStyle';
import clothes from '../../assets/img/projectos/Clothes.jpg';
import findbook from '../../assets/img/projectos/FindBook.jpg';
import talktome from '../../assets/img/projectos/TalkToMe.jpg';
import portifolio from '../../assets/img/projectos/portifolio.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export function Projetos() {

  return (
    <ProjetoSection id='projetos'>
      <Title>Projetos</Title>
      <ProjetoDiv>
        <Carousel
          className='crsl'
          emulateTouch={true}
          useKeyboardArrows={true}
          showArrows={true}
          infiniteLoop
          swipeable={true}
          showStatus={false}
          showIndicators={false}    
        >
          <Carouseltem>
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
          </Carouseltem>
          <Carouseltem>
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
          </Carouseltem>
          <Carouseltem>
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
          </Carouseltem>
          <Carouseltem>
            <DivImg>
              <Img src={portifolio} />
            </DivImg>
            <SubTitle>Portifolio</SubTitle>
            <Text>Projeto pessoal desenvolvido com a finalidade de mostrar os demais projetos já desenvolvidos,
              sendo esse projeto uma one page, apresentando de maneira curta um pouco mais sobre mim e meus conhecimentos.
            </Text>
            <TextDestac>Tecnologias utilizadas no projeto: React Js, TypeScript, Styled Components, React Carousel e Swiper.
            </TextDestac>
            <ButtonDiv>
              <ButtonLink href='https://portifolio-rho-six-31.vercel.app/'>
                <Button>
                  Projeto
                </Button>
              </ButtonLink>
              <ButtonLink href='https://github.com/ItallaF/portifolio'>
                <Button>
                  Código
                </Button>
              </ButtonLink>
            </ButtonDiv>
          </Carouseltem>
        </Carousel>
      </ProjetoDiv>
    </ProjetoSection>
  );
};
