'use client';

import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import styles from './splashscreen.module.css';
import { BackgroundSvg } from './backgroundSvg/backgroundSvg';
import Image from 'next/image';

export const Splashscreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);

    anime({
      targets: '#splashSVG',
      rotate: '1turn',
      duration: 3000,
      easing: 'easeOutExpo',
      complete: () => {
        anime({
          targets: '#splashScreen',
          opacity: 0,
          duration: 1000,
          easing: 'easeInOutQuad',
          complete: () => {
            finishLoading();
          },
        });
      },
    });
  }, []);

  return (
    <div className={styles.splashscreenContainer} id="splashScreen">
      {/* <BackgroundSvg /> */}

      <h1>TECHNORAMA 2050</h1>
      <h2>THE FUTURE IS NOW</h2>
      {/* <svg
        id="splashSVG"
        width="760"
        height="666"
        viewBox="0 0 951 883"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M309.374 708.407C259.216 382.714 255.044 301.485 311.947 130.888C323.657 104.063 345.089 32.6809 419.411 1.40019C317.789 39.5059 106.908 127.199 76.3613 173.127C22.3184 256.701 -55.4984 480.393 65.5776 706.569C94.9833 729.752 207.38 792.073 402.021 869.205C374.53 854.728 327.461 796.909 309.374 708.407Z"
          fill="url(#paint0_linear_594_24)"
        />
        <path
          d="M418.576 876.409C351.808 854.954 317.11 751.138 308.107 701.912C802.825 493.049 937.433 419.451 949.38 370.251L872.513 686.788C835.113 825.441 502.037 903.228 418.576 876.409Z"
          fill="url(#paint1_linear_594_24)"
        />
        <path
          d="M781.489 490.824C657.311 322.302 415.817 209.321 302.932 161.392C330.891 57.6136 381.965 15.9836 419.285 1.37305C675.191 52.4642 967.048 285.871 949.38 370.251C941.134 409.636 822.195 471.938 781.489 490.824Z"
          fill="url(#paint2_linear_594_24)"
        />
        <path
          d="M949.38 370.251L872.513 686.788C835.113 825.441 502.037 903.228 418.576 876.409C351.808 854.954 317.11 751.138 308.107 701.912C802.825 493.049 937.433 419.451 949.38 370.251ZM949.38 370.251C941.134 409.636 822.195 471.938 781.489 490.824C657.311 322.302 415.817 209.321 302.932 161.392C330.891 57.6136 381.965 15.9836 419.285 1.37305C675.191 52.4642 967.048 285.871 949.38 370.251ZM311.947 130.888C255.044 301.485 259.216 382.714 309.374 708.407C327.461 796.909 374.53 854.728 402.021 869.205C207.38 792.073 94.9833 729.752 65.5776 706.569C-55.4984 480.393 22.3184 256.701 76.3613 173.127C106.908 127.199 317.789 39.5059 419.411 1.40019C345.089 32.6809 323.657 104.063 311.947 130.888Z"
          stroke="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_594_24"
            x1="670.518"
            y1="53.9511"
            x2="587.546"
            y2="450.215"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B187A4" />
            <stop offset="1" stopColor="#BAE3E5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_594_24"
            x1="670.518"
            y1="53.9511"
            x2="587.546"
            y2="450.215"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B187A4" />
            <stop offset="1" stopColor="#BAE3E5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_594_24"
            x1="670.518"
            y1="53.9511"
            x2="587.546"
            y2="450.215"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B187A4" />
            <stop offset="1" stopColor="#BAE3E5" />
          </linearGradient>
        </defs>
      </svg> */}
      <section className={styles.stage}>
        <figure className={styles.ball}>
          <span className={styles.shadow}></span>
        </figure>
      </section>
    </div>
  );
};
