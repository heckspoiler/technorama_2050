import Home from './home/page';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';

export default function App({ posts }) {
  return (
    <>
      <SvgBackground />
      <Home />
    </>
  );
}
