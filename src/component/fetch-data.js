import React, { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const category = 'computers';
    const quotesUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'taCIDPxMA81DWfKUu0b2JZGQDpHPfH0R4BNcEs0K';

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(quotesUrl, {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
        });

        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading, setHasError]);

  if (hasError) return <div className="status"><strong>Something went wrong!</strong></div>;

  if (isLoading) return <div className="status"><strong>Loading...</strong></div>;
  const index = Date.now;
  return (
    <div>
      {data.map((quotes) => (
        <div key={index} className="quote-div">
          &quot;
          {quotes.quote}
          &quot;
          <br />
          ➖
          <strong className="author">{quotes.author}</strong>
        </div>
      ))}
    </div>
  );
}

export default Quote;
