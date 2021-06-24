import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hook';
import { getAPI } from '../misc/config';
import ShowsGrid from '../components/Shows/ShowsGrid';

const Starred = () => {
  const [shows, setShows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [starred] = useShows();

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => getAPI(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {loading && <div>Shows are Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !shows && <div>NO shows added</div>}
      {!loading && !error && shows && (
        <div>
          <ShowsGrid data={shows} />
        </div>
      )}
    </MainPageLayout>
  );
};

export default Starred;
