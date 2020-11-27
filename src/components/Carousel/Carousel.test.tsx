import { fireEvent, render } from '@testing-library/react';
import { Carousel } from './Carousel';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <Carousel>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </Carousel>
  );

  const leftButton = getByTestId('button-left');
  const rightButton = getByTestId('button-right');
  const slideIndicator = getByTestId('indicator');

  // initial state
  expect(slideIndicator).toHaveTextContent('1 / 3');

  fireEvent.click(rightButton);
  expect(slideIndicator).toHaveTextContent('2 / 3');

  fireEvent.click(rightButton);
  expect(slideIndicator).toHaveTextContent('3 / 3');

  fireEvent.click(rightButton);
  expect(slideIndicator).toHaveTextContent('1 / 3');

  fireEvent.click(leftButton);
  expect(slideIndicator).toHaveTextContent('3 / 3');
});
