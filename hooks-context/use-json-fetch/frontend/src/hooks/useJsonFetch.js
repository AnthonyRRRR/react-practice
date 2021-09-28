import React, { useEffect, useState } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts)
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();

        setData(data);
        setLoading(false)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchData()
  }, []);
  return { data, isLoading, error }
}