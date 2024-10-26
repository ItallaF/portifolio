import { IoClose } from 'react-icons/io5';
import { Container } from './MenuMobileStyle';
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: any) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href='#home'>Home</a>
        <a href='#sobreMim'>Sobre mim</a>
        <a href='#experiencias'>Experiências</a>
        <a href='#projetos'>Projetos</a>
        <a href='#certificacoes'>Certificações</a>
      </nav>
    </Container>
  );
};