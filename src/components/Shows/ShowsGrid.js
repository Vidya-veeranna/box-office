import React from 'react';
import ShowsCard from './ShowsCard';

const ShowsGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowsCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : ''}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
