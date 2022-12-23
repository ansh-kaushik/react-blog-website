import { useEffect, useState } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err1, setErr1] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error('There was an Error while fetching.');
          }
          return res.json();
        })
        .then((data) => {
          setErr1(null);
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            setIsPending(false);
            console.log(err);
            setErr1(err.message);
          }
          // console.log(err.message);f
        });
    }, 100);
    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isPending, err1 };
};

export default useFetch;
