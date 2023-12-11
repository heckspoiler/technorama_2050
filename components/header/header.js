import React from 'react';
import Link from 'next/link';
import { DonateButton } from './donateButton/donateButton';
import Logo from './logo/logo';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/home">
        <Logo />
      </Link>
      <DonateButton />
    </header>
  );
};

export default Header;
