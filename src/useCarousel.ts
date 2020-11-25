import { useEffect, useState, useRef, CSSProperties } from 'react';

export function useCarousel(itemsLength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleResize() {
    const width = ref.current?.offsetWidth;
    if (width) setWidth(width);
    setCurrentIndex(0);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSlideStyle: CSSProperties = {
    width,
    transform: `translate3d(-${currentIndex * width}px, 0, 0)`,
  };

  return {
    ref,
    width,
    currentIndex,
    currentSlideStyle,
    prevSlide() {
      setCurrentIndex(currentIndex === 0 ? itemsLength - 1 : currentIndex - 1);
    },
    nextSlide() {
      setCurrentIndex(currentIndex === itemsLength - 1 ? 0 : currentIndex + 1);
    },
  };
}
