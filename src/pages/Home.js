import React, { useState } from 'react';
import ActorGrid from '../components/Actors/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowsGrid from '../components/Shows/ShowsGrid';
import { getAPI } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResult] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const showSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    getAPI(`/search/${searchOption}?q=${input}`).then(result => {
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
      return results[0].show ? (
        <ShowsGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onRadioOption = ev => {
    setSearchOption(ev.target.value);
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder="Search for something"
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            type="radio"
            id="shows-search"
            checked={showSearch}
            value="shows"
            onChange={onRadioOption}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            checked={!showSearch}
            id="actors-search"
            value="people"
            onChange={onRadioOption}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResult()}
    </MainPageLayout>
  );
};

export default Home;
