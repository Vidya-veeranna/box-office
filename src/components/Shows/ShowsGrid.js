import React from 'react';
import ShowsCard from './ShowsCard';
import { FlexGrid } from '../styled';

import NOT_FOUND_IMG from '../../images/not-found.png';

const ShowsGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NOT_FOUND_IMG}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowsGrid;
