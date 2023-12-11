import React from 'react';
import Image from 'next/image';
import styles from './firstSection.module.css';

export const FirstSection = () => {
  return (
    <div className={styles.firstContainer}>
      <div>
        <div>
          <Image
            src="/images/home/hero_sketch.png"
            width={1405 / 3}
            height={556 / 3}
            alt="Technorama 2050 Hero Sketch"
          />
        </div>
        <div className={styles.twentyfifty}>
          <h1>20</h1>
          <h1>50</h1>
        </div>
      </div>
    </div>
  );
};
