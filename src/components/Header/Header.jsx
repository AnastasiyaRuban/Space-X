import React from 'react';
import styles from './header.module.css';
import Logo from '../../assets/Logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={` ${styles.header__container} container`}>
        <div className={styles.header__logo}>
          <a href='/' className={styles['header__logo-link']}>
            <img src={Logo} alt='Логотип Space-X' />
          </a>
        </div>

        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                Главная
              </a>
            </li>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                Технология
              </a>
            </li>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                График полетов
              </a>
            </li>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                Гарантии
              </a>
            </li>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                О компании
              </a>
            </li>
            <li className={styles.header__item}>
              <a href='/' className={styles.header__link}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
