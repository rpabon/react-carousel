import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

export function Slide({
  children,
  width,
  currentIndex,
  nextWidth,
}: SlideProps) {
  //   const ref = useRef<HTMLDivElement>(null);
  //   const [width, setWidth] = useState(props.parentWidth || 0);

  //   useEffect(() => {
  //     if (props.singleSlideMode) return;
  //     const width = ref.current?.getBoundingClientRect()?.width;
  //     setWidth(width || 0);
  //   }, [props.singleSlideMode]);

  const style: CSSProperties = {
    width,
    transform: `translate3d(-${currentIndex * nextWidth}px, 0, 0)`,
  };

  return (
    <>
      <div className="slide" style={style}>
        {children}
      </div>
    </>
  );
}

interface SlideProps {
  singleSlideMode?: boolean;
  parentWidth?: number;
  currentIndex: number;
  children: ReactNode;
  width: number;
  nextWidth: number;
}
