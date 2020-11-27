import { useCarousel } from './useCarousel';
import { getInnerWrapperStyles } from './getInnerWrapperStyles';
import chevron from './img/right-chevron.svg';

export function Carousel({ children, multi }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const uc = useCarousel(items);
  const innerWrapperStyles = getInnerWrapperStyles(uc, multi);

  return (
    <div className="container">
      <button onClick={uc.prevSlide}>
        <img alt="left chevron" src={chevron} className="chevron left" />
      </button>

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

      <button onClick={uc.nextSlide}>
        <img alt="right chevron" src={chevron} className="chevron" />
      </button>
    </div>
  );
}

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
  multi?: boolean;
}
