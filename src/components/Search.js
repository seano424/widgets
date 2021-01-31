import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState('animals');
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [ results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setDebouncedTerm(term);
    }, 1000)

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(response.data.query.search)
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm])



  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
          className="ui button" 
          href={`https://www.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search meeee</label>
          <input 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"/>
        </div>
      </div>
      <div className="ui celled list">
      {renderedResults}
      </div>
    </div>
  )
}

export default Search;