import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import Logo from '../../assets/Logo.png';
import Burger from './Burger/Burger';
import Nav from './Nav/Nav';

export function Header() {
  const [screenSize, setScreenSize] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScreenSize(window.screen.width);
    window.addEventListener('resize', changeScreenSize);

    return () => {
      window.removeEventListener('resize', changeScreenSize);
    };
  }, [screenSize]);

  const changeScreenSize = () => {
    setScreenSize(window.screen.width);
  };

  const handleClick = (e) => {
    // e.target.classList.toggle('active');
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={` ${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <a href='/' className={styles['header__logo-link']}>
            <img src={Logo} alt='Логотип Space-X' />
          </a>
        </div>

        {screenSize <= 1024 ? <Burger onClick={handleClick} /> : ''}

        <Nav screenSize={screenSize} className={menuOpen ? 'nav-open' : ''} />
      </div>
    </header>
  );
}
