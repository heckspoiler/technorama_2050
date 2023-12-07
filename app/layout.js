import { Inter } from 'next/font/google';
import Header from '../components/header/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Technorama 2050',
  description:
    'Technorama 2050 is an ongoing project by the Technorama museum in Winterthur, Switzerland. It is a collection of speculative design projects that explore the future of technology and society.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
