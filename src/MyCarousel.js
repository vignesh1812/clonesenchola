import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './Sencholaimages/3/Rectangle 4587.png';
import img2 from './Sencholaimages/3/Rectangle 4592.png';
import img3 from './Sencholaimages/3/Rectangle 4620.png';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
