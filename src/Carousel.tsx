import React from 'react';
import { useCarousel } from './useCarousel';

export function Carousel({ items }: CarouselProps) {
  const uc = useCarousel(items.length);

  return (
    <>
      <div className="wrapper" ref={uc.wrapperRef}>
        <div className="innerWrapper" style={{ width: uc.innerWrapperWidth }}>
          {items.map((item, i) => (
            <div key={i} className="slide" style={uc.currentSlideStyle}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <p>active: {uc.currentIndex}</p>
      <button disabled={uc.isFirstSlide} onClick={uc.prevSlide}>
        prev
      </button>
      <button disabled={uc.isLastIndex} onClick={uc.nextSlide}>
        next
      </button>
    </>
  );
}

interface CarouselProps {
  items: JSX.Element[];
}
