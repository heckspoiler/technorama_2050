import Home from './home/page';
import { SvgBackground } from '@/components/home/svgBackground/svgBackground';
import CustomCursor from '@/components/general/cursor/cursor';

export default function App({ posts }) {
  return (
    <>
      <SvgBackground />
      <CustomCursor />
      <Home />
    </>
  );
}
