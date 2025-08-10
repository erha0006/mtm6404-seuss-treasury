import { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched quotes:", data); // Debug log
        setQuotes(data);
      })
      .catch(err => {
        console.error("Failed to fetch quotes:", err);
      });
  }, []);

  if (quotes.length === 0) {
    return <p>Loading quotes...</p>;
  }

  return (
    <div className="quotes-container">
      {quotes.map((quote, index) => {
        const quoteText = quote.quote || quote.text || "No quote text available";
        return (
          <blockquote key={index} className="quote-item">
            {quoteText}
          </blockquote>
        );
      })}
    </div>
  );
}

export default Quotes;
