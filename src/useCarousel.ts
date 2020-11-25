import { useEffect, useState, useRef, CSSProperties } from 'react';

export function useCarousel(itemsLength: number) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const width = wrapperRef.current?.offsetWidth;
    if (width) setWidth(width);
  }, []);

  const currentSlideStyle: CSSProperties = {
    width,
    transform: `translate3d(-${currentIndex * width}px, 0, 0)`,
  };

  return {
    wrapperRef,
    innerWrapperWidth: width * itemsLength,
    wrapperWidth: width,
    currentIndex,
    isFirstSlide: currentIndex === 0,
    isLastIndex: currentIndex === itemsLength - 1,
    prevSlide() {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
    nextSlide() {
      if (currentIndex < itemsLength) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    currentSlideStyle,
  };
}
