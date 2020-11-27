import { useCarousel } from './useCarousel';
import { getInnerWrapperStyles } from './getInnerWrapperStyles';

export function Carousel({ children, multi }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const uc = useCarousel(items);
  const innerWrapperStyles = getInnerWrapperStyles(uc, multi);

  return (
    <>
      <div className="wrapper" ref={uc.wrapperRef}>
        <div className="innerWrapper" style={innerWrapperStyles}>
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
