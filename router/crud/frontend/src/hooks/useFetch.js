import React, { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json()

        setResponse(json);
        setLoading(false)
      } catch (e) {
        // console.log(e);
        setError(e)
      }
    };
    fetchData()
  }, [url, response && response.length]);
  //отправляет 4 гет запроса

  return { response, setResponse, isLoading, error }

};

export default useFetch