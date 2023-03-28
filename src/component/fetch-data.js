import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const category = 'computers';
  const quotesUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  const apiKey = 'taCIDPxMA81DWfKUu0b2JZGQDpHPfH0R4BNcEs0K';

  const fetchData = useCallback(async () => {
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
  }, [quotesUrl, apiKey]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, [fetchData]);

  const quotes = useMemo(() => data, [data]);

  if (hasError) return <div className="status"><strong>Something went wrong!</strong></div>;

  if (isLoading) return <div className="status"><strong>Loading...</strong></div>;

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id} className="quote-div">
          &quot;
          {quote.quote}
          &quot;
          <br />
          ➖
          <strong className="author">{quote.author}</strong>
        </div>
      ))}
    </div>
  );
}
export default Quote;
