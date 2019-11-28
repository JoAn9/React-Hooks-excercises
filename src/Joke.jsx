import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Joke() {
  const [joke, setJoke] = useState({});

  const urlChuck = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(urlChuck);
        setJoke(res.data);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    fetchData();
    // return () => {
    //   cleanup
    // };
  }, []);
  const { value } = joke;
  return (
    <div>
      <h3>Joke</h3>
      <p>{value}</p>
    </div>
  );
}

export default Joke;
