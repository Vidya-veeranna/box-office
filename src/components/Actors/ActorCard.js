import React from 'react';

const ActorCard = ({ name, gender, birthday, dealthday, image, country }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name}
        {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born ${birthday}</p> : null}
      <p>{dealthday ? `Dealth ${dealthday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
