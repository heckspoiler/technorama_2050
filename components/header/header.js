import React from 'react';
import Link from 'next/link';
import { DonateButton } from './donateButton/donateButton';
import Logo from './logo/logo';
import styles from './header.module.css';
import { Navbar } from '../navbar/navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/home">
        <Logo />
      </Link>
      <Navbar />
      <div className={styles.stroke}></div>
      <DonateButton />
    </header>
  );
};

export default Header;
