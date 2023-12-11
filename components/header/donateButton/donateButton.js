import React from 'react';
import Link from 'next/link';
import styles from './donateButton.module.css';

export const DonateButton = () => {
  return (
    <Link href="https://ozelot.ltd/" target="_blank">
      <button className={styles.button}>
        <span className={styles.donateButtonText}>donate</span>
      </button>
    </Link>
  );
};
