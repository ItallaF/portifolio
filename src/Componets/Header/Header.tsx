import React, { memo, useState } from 'react';
import { HeaderStyled, LogoStyled, MenuContentStyled, MenuStyled } from './HeaderStyle';
import { FaBars } from 'react-icons/fa6';

function Header() {
  const [show, setShow] = useState<boolean>(false)

  const toggleMenu = () => {
    setShow(!show)
  }

  return (
    <HeaderStyled>
      <LogoStyled>
        <button onClick={() => window.location.href = '/'}>
          {/* <img src={logo} alt="Logo Marvel" width="36px" /> */}
        </button>
      </LogoStyled>

      <MenuContentStyled>
        <FaBars onClick={toggleMenu} style={{color: '#f5fffa', height: '7vh', width: '27vw'}}/>
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#sobreMim'>Sobre mim</a>
        </li>
        <li>
          <a href='#experiencias'>Experiências</a>
        </li>
        <li>
          <a href='#projetos'>Projetos</a>
        </li>
        <li>
          <a href='#certificacoes'>Certificações</a>
        </li>
      </MenuStyled>
    </HeaderStyled>
  );
}
export default memo(Header);