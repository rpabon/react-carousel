import { useCarousel } from './useCarousel';
import { getInnerWrapperStyles, getSlideStyles } from './getStyles';
import { Button } from '../Button/Button';
import { SlideIndicator } from '../SlideIndicator/SlideIndicator';

export function Carousel({ children, multi }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const uc = useCarousel(items);
  const innerWrapperStyles = getInnerWrapperStyles(uc, multi);
  const slideStyles = getSlideStyles(uc, multi);

  return (
    <div className="container">
      <Button onClick={uc.prevSlide} left />

      <div className="wrapper" ref={uc.wrapperRef}>
        <div className="innerWrapper" style={innerWrapperStyles}>
          {items.map((item, i) => (
            <div key={i} className="slide" style={slideStyles}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <Button onClick={uc.nextSlide} />
      <SlideIndicator current={uc.currentIndex} total={items.length} />
    </div>
  );
}

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
  multi?: boolean;
}
