import React, { memo, useState } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/img/Logo.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.logoButton} onClick={() => window.location.href = '/'}>
          <img src={logo} alt="Logo" />
        </button>
       <nav className={styles.navDesktop}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobreMim">Sobre mim</a></li>
            <li><a href="#experiencias">Experiências</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#certificacoes">Certificações</a></li>
          </ul>
        </nav>
        <button className={styles.hamburger}>
          <FaBars onClick={toggleMenu} style={{color: '#f5fffa', height: '7vh', width: '27vw'}}/>
        </button>
      </div>
      <nav className={`${styles.mobileMenu} ${ isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#sobreMim'>Sobre mim</a></li>
          <li><a href='#experiencias'>Experiências</a></li>
          <li><a href='#projetos'>Projetos</a></li>
          <li><a href='#certificacoes'>Certificações</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default memo(Header);