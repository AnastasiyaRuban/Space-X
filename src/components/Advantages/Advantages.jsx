import React from 'react';
import styles from './advantages.module.css';
import { CounterContent } from '../CounterContent/CounterContent';

export function Advantages() {
  return (
    <ul className={styles.advantages}>
      <li className={styles.advantages__item}>
        <a href='##' className={styles.advantages__link}>
          <p className={styles.advantages__point}>мы</p>
          <span className={styles.advantages__value}>
            {CounterContent(10, 1, 300)}
          </span>
          <p className={styles.advantages__point}>на&nbsp;рынке</p>
        </a>
      </li>
      <li className={styles.advantages__item}>
        <a href='##' className={styles.advantages__link}>
          <p className={styles.advantages__point}>гарантируем</p>
          <span className={styles.advantages__value}>
            {CounterContent(0, 50, 300)}%
          </span>
          <p className={styles.advantages__point}>безопасность</p>
        </a>
      </li>
      <li className={styles.advantages__item}>
        <a href='##' className={styles.advantages__link}>
          <p className={styles.advantages__point}>календарик&nbsp;за</p>
          <span className={styles.advantages__value}>
            {CounterContent(1500, 2001, 300)}
            <span className={styles['advantages__value-small']}>г.</span>
          </span>
          <p className={styles.advantages__point}>в&nbsp;подарок</p>
        </a>
      </li>
      <li className={styles.advantages__item}>
        <a href='##' className={styles.advantages__link}>
          <p className={styles.advantages__point}>путешествие</p>
          <span className={styles.advantages__value}>
            {CounterContent(200, 597, 300)}
          </span>
          <p className={styles.advantages__point}>дней</p>
        </a>
      </li>
    </ul>
  );
}
