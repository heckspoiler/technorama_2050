import { Inter } from 'next/font/google';
import Header from '../components/header/header';
import './globals.css';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import CustomCursor from '@/components/general/cursor/cursor';

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
        <CustomCursor />
        <Header />
        <SvgBackground />
        {children}
      </body>
    </html>
  );
}
