import React, { useState, useEffect } from 'react';
import PICTURES from './data/pictures';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;

function Gallery() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3 * SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => (storedIndex + 1) % PICTURES.length);
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  const handleDelay = event => {
    const inputedDelay = Number(event.target.value) * SECONDS;
    const passedDelay =
      inputedDelay < minimumDelay ? minimumDelay : inputedDelay;
    setDelay(passedDelay);
  };

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallery" />
      <div className="multiform">
        <div>
          Gallery transition delay (seconds):
          <input type="number" onChange={handleDelay} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
