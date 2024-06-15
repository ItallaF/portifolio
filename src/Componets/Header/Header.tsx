import { Banner } from '../Banner/Banner';
import { Menu, MenuLink, Navbar } from './HeaderStyle';

export function Header() {
  return (
    <Menu>
      <Navbar>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/">Sobre mim</MenuLink>
        <MenuLink href="/">Experiências</MenuLink>
        <MenuLink href="/">Projetos</MenuLink>
        <MenuLink href="/">Certificações</MenuLink>
      </Navbar>
    </Menu>
  );
}