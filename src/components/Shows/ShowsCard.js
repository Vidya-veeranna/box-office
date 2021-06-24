import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Star, StyledShowCard } from './ShowCard.styled';

const ShowsCard = ({ id, name, image, summary, onStarClick, isStarred }) => {
  const summaryText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  return (
    <StyledShowCard>
      <div>
        <div className="img-wrapper">
          <img src={image} alt="show" />
        </div>
        <h1>{name}</h1>

        <p>{summaryText}</p>

        <div className="btns">
          <Link to={`/show/${id}`}>Read more</Link>
          <button type="button" onClick={onStarClick}>
            <Star active={isStarred} />
          </button>
        </div>
      </div>
    </StyledShowCard>
  );
};

export default memo(ShowsCard);
