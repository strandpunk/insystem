import './CarouselBox.scss'
import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  useEffect(() => {
    console.log(children.length)
    console.log(currentIndex)
  })
 

  const next = () => {
    if (currentIndex < (length/2)) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < ((length / 2) + 1); i++) {
      dots.push(
        <div
          key={i}
          className={`dot ${currentIndex === i ? 'active' : 'disabled'}`}
        />
      );
    }
    return dots;
  };

  return (
    <div className='carouselContainer'>
      <div className='carouselWrapper'>
        <button onClick={prev} className='leftArrow' disabled={currentIndex === 0}>
          &lt;
        </button>
        <div className='carouselContentWrapper'>
          <div className='carouselContent'
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {children}
          </div>
        </div>
        <button onClick={next} className='rightArrow' disabled={currentIndex  > (length / 2)}>
          &gt;
        </button>
      </div>
      <div className='dotsWrapper'>
        <div className="dotsContainer">
          {renderDots()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
