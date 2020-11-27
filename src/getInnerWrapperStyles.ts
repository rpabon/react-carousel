import { CSSProperties } from 'react';
import { useCarousel } from './useCarousel';

export function getInnerWrapperStyles(
  {
    slideWidthList,
    currentIndex,
    wrapperWidth,
    innerWrapperWidth,
  }: ReturnType<typeof useCarousel>,
  multi?: boolean
): CSSProperties {
  if (multi) {
    const totalSlidesWidth = getTotalWidthFromIndex(slideWidthList);
    const currentWidth = getTotalWidthFromIndex(slideWidthList, currentIndex);
    const remainingWidth =
      totalSlidesWidth - currentWidth + slideWidthList[currentIndex];

    return getStyles(remainingWidth < wrapperWidth ? 0 : currentWidth);
  }

  return getStyles(wrapperWidth * currentIndex, innerWrapperWidth);
}

function getTotalWidthFromIndex(slideWidthList: number[], index = 0) {
  return slideWidthList.slice(0, index).reduce((acc, width) => acc + width, 0);
}

function getStyles(translateX: number, width?: number): CSSProperties {
  const translate: CSSProperties = {
    transform: `translate3d(-${translateX}px, 0, 0)`,
  };

  if (width) {
    return { width, ...translate };
  }

  return translate;
}
