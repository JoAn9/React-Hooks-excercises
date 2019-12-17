import React, { useState } from 'react';
import PICTURES from '../../data/pictures';
import { useDynamicTransition } from '../../hooks';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);

  const index = useDynamicTransition({ delay, length: PICTURES.length });

  const handleDelay = event => {
    const delay = Number(event.target.value) * SECONDS;
    setDelay(delay < minimumDelay ? minimumDelay : delay);
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
