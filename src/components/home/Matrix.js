import React, { useState } from 'react';
import MATRIX_PICTURES from '../../data/matrix';
import { useDynamicTransition } from '../../hooks';

const minDelay = 10;

function Matrix() {
  const [delay, setDelay] = useState(100);

  const index = useDynamicTransition({ delay, length: MATRIX_PICTURES.length });

  const handleDelay = event => {
    const delay = Number(event.target.value);
    setDelay(delay > minDelay ? delay : minDelay);
  };

  return (
    <div className="Matrix">
      <img src={MATRIX_PICTURES[index]} alt="matrix" />
      <div className="multiform">
        <div>
          Frame transition delay (miliseconds):{' '}
          <input type="number" onChange={handleDelay} />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
