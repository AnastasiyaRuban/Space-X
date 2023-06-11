import React from 'react';
import styles from './advantages.module.css';

export function Advantages() {
  return (
    <ul className={styles.advantages}>
      <li className={styles.advantages__item}>
        <p className={styles.advantages__point}>мы</p>
        <span className={styles.advantages__value}>1</span>
        <p className={styles.advantages__point}>на&nbsp;рынке</p>
      </li>
      <li className={styles.advantages__item}>
        <p className={styles.advantages__point}>гарантируем</p>
        <span className={styles.advantages__value}>50%</span>
        <p className={styles.advantages__point}>безопасность</p>
      </li>
      <li className={styles.advantages__item}>
        <p className={styles.advantages__point}>календарик&nbsp;за</p>
        <span className={styles.advantages__value}>
          2001<span className={styles['advantages__value-small']}>г.</span>
        </span>
        <p className={styles.advantages__point}>в&nbsp;подарок</p>
      </li>
      <li className={styles.advantages__item}>
        <p className={styles.advantages__point}>путешествие</p>
        <span className={styles.advantages__value}>597</span>
        <p className={styles.advantages__point}>дней</p>
      </li>
    </ul>
  );
}
