import React from 'react';
import { Carousel } from './Carousel';
import { CarouselMulti } from './CarouselMulti';
import i150 from './img/150.png';
import i240 from './img/240.png';
import i350 from './img/350.png';
import './App.scss';

function App() {
  return (
    <>
      <Carousel multi>
        <img src={i150} />
        <img src={i240} />
        <img src={i350} />
        <img src={i150} />
        <img src={i240} />
        <img src={i350} />
        <img src={i150} />
        <img src={i240} />
        <img src={i350} />
      </Carousel>
      {/* 
      <CarouselMulti>
      <img src={i150} />
      <img src={i240} />
      <img src={i350} />
        <img src={i150} />
        <img src={i240} />
        <img src={i350} />
        <img src={i150} />
        <img src={i240} />
        <img src={i350} />
      </CarouselMulti> */}
    </>
  );
}

export default App;
