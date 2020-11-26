import { useEffect, useState, useRef } from 'react';

export function useCarousel(items: JSX.Element[], multi?: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [widthList, setWidthList] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = items.length - 1;

  function handleResize() {
    const width = ref.current?.getBoundingClientRect().width || 0;
    setWrapperWidth(width);

    const list: number[] = [];
    ref.current?.querySelectorAll('.slide').forEach((slide) => {
      list.push(slide.getBoundingClientRect().width);
    });
    setWidthList(list);

    setCurrentIndex(0);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ref,
    wrapperWidth,
    widthList,
    currentIndex,
    prevSlide() {
      setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    },
    nextSlide() {
      setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    },
  };
}
