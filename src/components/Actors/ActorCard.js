import React from 'react';
import { StyledActorCard } from './Actors.styled';

const ActorCard = ({ name, gender, birthday, dealthday, image, country }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name}
        {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born ${birthday}</p> : null}
      <p className="dealthday">{dealthday ? `Dealth ${dealthday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
