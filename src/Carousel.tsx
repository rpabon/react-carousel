import { CSSProperties } from 'react';
import { useCarousel } from './useCarousel';

export function Carousel({ children, multi }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const uc = useCarousel(items, multi);
  const innerWrapperWidth = uc.wrapperWidth * items.length;

  function getStyle(): CSSProperties {
    if (multi) {
      const total = uc.widthList.reduce((acc, width) => acc + width, 0);
      const w = uc.widthList
        .slice(0, uc.currentIndex)
        .reduce((acc, width) => acc + width, 0);
      const remainingWidth = total - w + uc.widthList[uc.currentIndex];

      return {
        transform: `translate3d(-${
          remainingWidth < uc.wrapperWidth ? 0 : w
        }px, 0, 0)`,
      };
    }

    return {
      width: innerWrapperWidth,
      transform: `translate3d(-${uc.wrapperWidth * uc.currentIndex}px, 0, 0)`,
    };
  }

  return (
    <>
      <div className="wrapper" ref={uc.ref}>
        <div className="innerWrapper" style={getStyle()}>
          {items.map((item, i) => (
            <div
              key={i}
              className="slide"
              style={{ width: multi ? 'auto' : uc.wrapperWidth }}
            >
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
  children: JSX.Element | JSX.Element[];
  multi?: boolean;
}
