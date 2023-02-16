import React from 'react';

const PortfolioItem = ({ link, picture, title, demoLink }) => {
  return (
    <div>
      <a href={demoLink} target="_blank" rel="noreferrer">
        Live demo
      </a>
      <img src={picture} alt="chat-app" />
      <a href={link} target="_blank" rel="noreferrer">
        <p>{title}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
