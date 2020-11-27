import { useEffect, useRef, useReducer, useCallback } from 'react';
import { carouselReducer, getInitialState } from './carouselReducer';

export function useCarousel(items: JSX.Element[]) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(carouselReducer, getInitialState());
  const { wrapperWidth, slideWidthList, currentIndex } = state;
  const lastIndex = items.length - 1;

  const handleResize = useCallback(() => {
    const wrapperWidth = wrapperRef.current?.getBoundingClientRect().width || 0;
    const slideWidthList: number[] = [];
    wrapperRef.current?.querySelectorAll('.slide').forEach((slide) => {
      slideWidthList.push(slide.getBoundingClientRect().width);
    });

    dispatch({
      type: 'SET_ALL_STATE',
      wrapperWidth,
      slideWidthList,
      currentIndex: 0,
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    wrapperRef,
    wrapperWidth,
    slideWidthList,
    currentIndex,
    get innerWrapperWidth() {
      return wrapperWidth * items.length;
    },
    prevSlide() {
      dispatch({
        type: 'SET_CURRENT_INDEX',
        currentIndex: currentIndex === 0 ? lastIndex : currentIndex - 1,
      });
    },
    nextSlide() {
      dispatch({
        type: 'SET_CURRENT_INDEX',
        currentIndex: currentIndex === lastIndex ? 0 : currentIndex + 1,
      });
    },
  };
}
