'use client';

import React, { useEffect, useRef } from 'react';
import styles from './cursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    const { clientX, clientY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.top = `${clientY}px`;
      cursorRef.current.style.left = `${clientX}px`;
    }
  };

  const onMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.add(styles.cursorExpanded);
    }
  };

  const onMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove(styles.cursorExpanded);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousemove', moveCursor);
      const linksAndButtons = document.querySelectorAll('a, button');
      linksAndButtons.forEach((elem) => {
        elem.addEventListener('mouseenter', onMouseEnter);
        elem.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        linksAndButtons.forEach((elem) => {
          elem.removeEventListener('mouseenter', onMouseEnter);
          elem.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }
  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
}
