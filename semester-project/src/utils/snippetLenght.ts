import { useEffect, useState } from 'react';

export function useSnippetLength(
  mobileLength = 140,
  desktopLength = 300,
  breakpoint = 768
) {
  const [length, setLength] = useState<number>(mobileLength);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < breakpoint) {
        setLength(mobileLength);
      } else {
        setLength(desktopLength);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [mobileLength, desktopLength, breakpoint]);

  return length;
}
