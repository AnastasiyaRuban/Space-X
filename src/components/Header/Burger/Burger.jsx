import React from 'react';
import styles from './burger.module.css';

export default function Burger({ onClick }) {
  const handleClick = (e) => {
    e.target.classList.toggle(styles['burger-active']);
    onClick();
  };

  return (
    <button aria-label='Меню' className={styles.burger} onClick={handleClick}>
      <span className={styles.burger__line}></span>
    </button>
  );
}
