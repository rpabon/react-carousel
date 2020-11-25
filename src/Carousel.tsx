import React from 'react';
import { useCarousel } from './useCarousel';

export function Carousel({ items }: CarouselProps) {
  const uc = useCarousel(items.length);
  const wrapperWidth = uc.width * items.length;

  return (
    <>
      <div className="wrapper" ref={uc.ref}>
        <div className="innerWrapper" style={{ width: wrapperWidth }}>
          {items.map((item, i) => (
            <div key={i} className="slide" style={uc.currentSlideStyle}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button onClick={uc.prevSlide}>prev</button>
      <button onClick={uc.nextSlide}>next</button>
    </>
  );
}

interface CarouselProps {
  items: JSX.Element[];
}
