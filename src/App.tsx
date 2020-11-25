import React from 'react';
import { Carousel } from './Carousel';
import './App.scss';

function App() {
  return (
    <Carousel
      items={[
        <img src="https://via.placeholder.com/150" />,
        <img src="https://via.placeholder.com/150" />,
        <img src="https://via.placeholder.com/150" />,
        // <h1>1</h1>,
        // <h1>2</h1>,
        // <h1>3</h1>,
      ]}
    />
  );
}

export default App;
