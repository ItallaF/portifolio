import styled from 'styled-components';

interface MenuProps {
  show: boolean
}
export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.primary};
  height: 8vh;
  position: fixed;
  width: 100%;
  z-index: 9999;
`

export const LogoStyled = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  :hover {
    cursor: pointer;
  }
  button {
    all: unset;
  }
`
export const MenuContentStyled = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
  overflow: hidden;
  display: none; 
  height: 40px;

  ${({ theme }) => theme.desktop`
    display: flex;
    align-items: center;
    position: fixed;
    height: 5vh;
  `}
`
export const MenuIconStyled = styled.img`
  cursor: pointer;
`
export const MenuStyled = styled.ul<MenuProps>`
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0 5%;
  overflow: hidden;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;

  li a {
    display: block;
    color: #f5fffa;
    text-align: center;
    padding: 8px;
    outline: none;
    text-decoration: none;
  }

  li:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    opacity: 40%;
    color: ${({ theme }) => theme.secondary};
  }


  ${({ theme }) => theme.desktop`
    display: ${({ show }: MenuProps) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background: ${({ theme }: ThemeProps) => theme.primary};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 50%;
    padding: 0;

    li {
      width: 100%;
    }

    li:hover {
      cursor: pointer;
      background: ${({ theme }: ThemeProps) => theme.secondary};
      opacity: 40%;
      a {
        color: #b37fb3;
      }
    }
  `}
`
