import React from 'react';
import { Carousel } from './components/Carousel/Carousel';
import i150 from './img/150.png';
import i240 from './img/240.png';
import i350 from './img/350.png';
import './App.scss';

function App() {
  return (
    <>
      <Carousel>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
      </Carousel>

      <Carousel>
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
      </Carousel>

      <Carousel multi>
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
        <img src={i150} alt="i150" />
        <img src={i240} alt="i240" />
        <img src={i350} alt="i350" />
      </Carousel>
    </>
  );
}

export default App;
