/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import ShowsCard from './ShowsCard';
import { FlexGrid } from '../styled';

import NOT_FOUND_IMG from '../../images/not-found.png';
import { useShows } from '../../misc/custom-hook';

const ShowsGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();
  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = useCallback(() => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
          }
        }, [isStarred, show.id]);

        return (
          <ShowsCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : NOT_FOUND_IMG}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowsGrid;
