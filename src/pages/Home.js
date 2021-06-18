import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { getAPI } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResult] = useState(null);

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    getAPI(`/search/shows?q=${input}`).then(result => {
      setResult(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResult = () => {
    if (results && results.length === 0) {
      return <div>No result found</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <p key={item.show.id}>{item.show.name}</p>
          ))}
        </div>
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
