import React from 'react';
import Image from 'next/image';
import styles from './firstSection.module.css';

export const FirstSection = () => {
  return (
    <div className={styles.firstContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.twentyfifty}>
          <h1>20</h1>
          <h1 className={styles.fifty}>50</h1>
        </div>
        <div>
          <Image
            src="/images/home/hero_sketch.png"
            width={1405 / 1.8}
            height={556 / 1.8}
            alt="Technorama 2050 Hero Sketch"
          />
        </div>
      </div>
    </div>
  );
};
