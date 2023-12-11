'use client';

import React, { useEffect, useRef } from 'react';
import styles from './cursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    const { pageX, pageY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.top = `${pageY}px`;
      cursorRef.current.style.left = `${pageX}px`;
    }
  };

  const clickEffect = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('expand');
      setTimeout(() => {
        cursorRef.current?.classList.remove('expand');
      }, 500);
    }
  };

  useEffect(() => {
    // Only add event listeners in a browser environment
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('click', clickEffect);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', clickEffect);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
}
