import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Slide } from './Slide';

export function CarouselMulti({ children }: CarouselProps) {
  const items = Array.isArray(children) ? children : [children];
  const ref = useRef<HTMLDivElement>(null);
  const [widthList, setWidthList] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const list: number[] = [];
    ref.current?.querySelectorAll('.slide').forEach((slide) => {
      list.push(slide.getBoundingClientRect().width);
    });
    setWidthList(list);
  }, []);

  const totalWidth = widthList.reduce((acc, width) => acc + width, 0);
  console.log(widthList, totalWidth);

  return (
    <>
      <div className="wrapper" ref={ref}>
        <div className="innerWrapper" style={{ width: totalWidth }}>
          {items.map((item, i) => (
            <Slide
              key={i}
              currentIndex={currentIndex}
              nextWidth={widthList[i + 1] || 0}
              width={widthList[i]}
            >
              {item}
            </Slide>
          ))}
        </div>
      </div>
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === items.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        next
      </button>
      <p>{currentIndex}</p>
      {/* <button onClick={uc.nextSlide}>next</button> */}
    </>
  );
}

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
}
