import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const items = [
  {
    src: ('images/16.png'),
    altText: 'Backgroundsiledr',
    caption: 'Slide 1',
    
  },
  {
    src: ('images/2.png'),
    altText: 'Slide 1',
    caption: 'Slide 2'
  },
  {
    src:  ('images/3.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/1.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/5.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/6.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/7.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/8.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/9.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/10.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/11.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/12.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/13.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/14.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/17.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/18.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/19.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/20.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/21.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/22.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  },
  {
    src:  ('images/23.png'),
    altText: 'Slide 1',
    caption: 'Slide 3'
  }
 
];

const Galery= (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img classname= 'portfolio' src={item.src} alt={item.altText} width = '100%' height ='20% ' align="center" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Galery;