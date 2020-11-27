export function carouselReducer(
  state: CarouselState,
  action: CarouselAction
): CarouselState {
  switch (action.type) {
    case 'SET_ALL_STATE':
      return {
        ...state,
        wrapperWidth: action.wrapperWidth,
        currentIndex: action.currentIndex,
        slideWidthList: action.slideWidthList,
      };

    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: action.currentIndex,
      };

    default:
      return state;
  }
}

function getInitialState(): CarouselState {
  return {
    wrapperWidth: 0,
    currentIndex: 0,
    slideWidthList: [],
  };
}

interface SetAllState extends CarouselState {
  type: 'SET_ALL_STATE';
}

interface SetCurrentIndex {
  type: 'SET_CURRENT_INDEX';
  currentIndex: number;
}

type CarouselAction = SetAllState | SetCurrentIndex;

interface CarouselState {
  wrapperWidth: number;
  currentIndex: number;
  slideWidthList: number[];
}

export { getInitialState, carouselReducer as default };
