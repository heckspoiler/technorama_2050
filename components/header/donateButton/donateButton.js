'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './donateButton.module.css';

export const DonateButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="https://ozelot.ltd/" target="_blank">
      <button
        className={styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className={styles.donateButtonText}>donate</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={hovered ? styles.hovered : ''}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2.67033C0 1.19555 1.19555 0 2.67033 0H15.4286C15.4286 8.53959e-05 15.4286 0.000170791 15.4286 0.000256186L15.4286 0.000253329C17.5104 2.08969 17.5043 5.4712 15.4149 7.55307L13.6592 9.30239L18.989 13.6484V19.2857H13.6484V9.3132L5.69144 17.2413C4.64672 18.2822 2.95597 18.2792 1.91503 17.2344C0.874097 16.1897 0.877164 14.499 1.92188 13.458L10.0688 5.34066H2.67033C1.19555 5.34066 0 4.14511 0 2.67033Z"
            fill="#3A3A39"
          />
        </svg>
      </button>
    </Link>
  );
};
