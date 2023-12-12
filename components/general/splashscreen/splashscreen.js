import React, { useState } from 'react';
import anime from 'animejs';
import Image from 'next/image';
import styles from './splashscreen.module.css';

export const Splashscreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add;
  };

  return (
    <div className={styles.splashscreenContainer}>
      <h1>TECHNORAMA 2050</h1>
      <Image
        src="/svg/moebius/moebius.svg"
        width={450}
        height={450}
        alt="Technorama 2050 Moebius"
      />
    </div>
  );
};
