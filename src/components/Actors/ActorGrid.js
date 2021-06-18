import React from 'react';
import ActorCard from './ActorCard';
import { FlexGrid } from '../styled';

import NOT_FOUND_IMG from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.dealthday}
          image={person.image ? person.image.medium : NOT_FOUND_IMG}
          gender={person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
