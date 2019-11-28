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
