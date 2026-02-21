import React, { memo, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './Header.module.css';
import logo from '../../../assets/img/Logo.jpg';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiências', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Certificações', href: '#certificates' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <a href="#home" className={styles.logo}>
          <img src={logo} alt="Logo do Portfólio" />
        </a>

        <nav className={styles.navDesktop}>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>
      </div>

      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default memo(Header);