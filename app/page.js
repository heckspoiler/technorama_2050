import Home from './home/page';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import { Loading } from './loading';

export default function App({ posts }) {
  return (
    <>
      <SvgBackground />
      <Home />
    </>
  );
}
