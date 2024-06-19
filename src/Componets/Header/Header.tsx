import { Banner } from '../Banner/Banner';
import { Menu, MenuLink, Navbar } from './HeaderStyle';

export function Header() {
  return (
    <>
      <Menu>
        <Navbar>
          <MenuLink href='#home'>Home</MenuLink>
          <MenuLink href='#sobreMim'>Sobre mim</MenuLink>
          <MenuLink href='#experiencias'>Experiências</MenuLink>
          <MenuLink href='#projetos'>Projetos</MenuLink>
          <MenuLink href='#certificacoes'>Certificações</MenuLink>
        </Navbar>
      </Menu>
    </>
  );
}