/* eslint-disable react/prop-types */
import { useState } from 'react';

function SwipeableComponent({ children , onSwipeLeft, onSwipeRight}) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe right to left
    //   console.log('swiped right');
      onSwipeRight()
    }

    if (touchStart - touchEnd < -50) {
      // swipe left to right
    //   console.log('swiped left');
      onSwipeLeft();
    }
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {children}
    </div>
  );
}

export default SwipeableComponent;