import React from 'react';
import styles from './nav.module.css';

export default function Nav({ screenSize, className }) {
  return (
    <nav
      className={
        screenSize <= 1024
          ? [styles['nav-tablet'], styles[className]].join(' ')
          : styles.nav
      }
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            Главная
          </a>
        </li>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            Технология
          </a>
        </li>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            График полетов
          </a>
        </li>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            Гарантии
          </a>
        </li>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            О компании
          </a>
        </li>
        <li className={styles.item}>
          <a href='/' className={styles.link}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
}
