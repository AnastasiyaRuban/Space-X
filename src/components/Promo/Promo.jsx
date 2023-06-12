import React from 'react';
import styles from './promo.module.css';

export function Promo() {
  return (
    <div className={styles.promo}>
      <h1 className={styles.promo__title}>
        ПУТЕШЕСТВИЕ
        <span className={styles.promo__subtitle}> на красную планету</span>
      </h1>
      <div className={styles['promo__button-container']}>
        <button className={styles.promo__button}>Начать путешествие</button>
      </div>
    </div>
  );
}
