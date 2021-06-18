import React from 'react';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.dealthday}
          image={person.image ? person.image.medium : ''}
          gender={person.gender}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
