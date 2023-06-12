import React from 'react';
import styles from './content.module.css';

export function Content({ children }) {
  return <main className={`${styles.content} container`}>{children}</main>;
}
