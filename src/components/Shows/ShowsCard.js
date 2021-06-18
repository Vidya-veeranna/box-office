import React from 'react';
import { Link } from 'react-router-dom';

const ShowsCard = ({ id, name, image, summary }) => {
  const summaryText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="show" />
        </div>
        <h1>{name}</h1>

        <p>{summaryText}</p>

        <div>
          <Link to={`/show/${id}`}>Read more</Link>
          <button type="button">star me</button>
        </div>
      </div>
    </div>
  );
};

export default ShowsCard;
