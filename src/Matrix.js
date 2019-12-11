import React, { useState, useEffect } from 'react';
import MATRIX_PICTURES from './data/matrix';

const minDelay = 10;

function Matrix() {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex(storedIndex => (storedIndex + 1) % MATRIX_PICTURES.length),
      delay
    );
    return () => clearInterval(interval);
  }, [delay]);

  const handleDelay = event => {
    console.log(event.target.value);
    const delay = Number(event.target.value) * 1000;
    setDelay(delay > minDelay ? delay : minDelay);
  };

  return (
    <div className="Matrix">
      <img src={MATRIX_PICTURES[index]} alt="matrix" />
      <div className="multiform">
        <div>
          Frame transition delay (seconds):{' '}
          <input type="number" onChange={handleDelay} />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
