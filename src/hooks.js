import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch(url, initialValue) {
  const [result, setResult] = useState(initialValue);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(url);
        setResult(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [url]);
  return result;
}

export function useDynamicTransition({ delay, length }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => (storedIndex + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [delay, length]);

  return index;
}
