import React from 'react';
import styles from './svgBackground.module.css';

export const SvgBackground = () => {
  return (
    <svg
      className={styles.svgBackground}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 700 700"
      width="700"
      height="700"
    >
      <defs>
        <linearGradient
          gradientTransform="rotate(-92, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient2"
        >
          <stop stopColor="#e0de13" stopOpacity="1" offset="0%"></stop>
          <stop
            stopColor="rgba(255,255,255,0)"
            stopOpacity="0"
            offset="100%"
          ></stop>
        </linearGradient>
        <linearGradient
          gradientTransform="rotate(92, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="gggrain-gradient3"
        >
          <stop stopColor="#BAE3E5" stopOpacity="1"></stop>
          <stop
            stopColor="rgba(255,255,255,0)"
            stopOpacity="0"
            offset="100%"
          ></stop>
        </linearGradient>
        <filter
          id="gggrain-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.25"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            result="turbulence"
          ></feTurbulence>
          <feColorMatrix
            type="saturate"
            values="0"
            in="turbulence"
            result="colormatrix"
          ></feColorMatrix>
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="linear" slope="3"></feFuncR>
            <feFuncG type="linear" slope="3"></feFuncG>
            <feFuncB type="linear" slope="3"></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            in="componentTransfer"
            result="colormatrix2"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 15 -7"
          ></feColorMatrix>
        </filter>
      </defs>
      <g>
        <rect width="100%" height="100%" fill="#e0de13"></rect>
        <rect width="100%" height="100%" fill="url(#gggrain-gradient3)"></rect>
        <rect width="100%" height="100%" fill="url(#gggrain-gradient2)"></rect>
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter="url(#gggrain-filter)"
          opacity="0.27"
          style={{ mixBlendMode: 'normal' }}
        ></rect>
      </g>
    </svg>
  );
};
