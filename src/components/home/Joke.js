import React from 'react';
import { useFetch } from '../../hooks';

function Joke() {
  const urlChuck = 'https://api.chucknorris.io/jokes/random';

  const { value } = useFetch(urlChuck, {});

  return (
    <div>
      <h3>Joke</h3>
      <p>{value}</p>
    </div>
  );
}

export default Joke;
