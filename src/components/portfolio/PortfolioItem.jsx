import React from 'react';

const PortfolioItem = ({ link, picture, title, demoLink }) => {
  return (
    <div>
      <a href={demoLink} target="_blank">
        Live demo
      </a>
      <img src={picture} alt="chat-app" />
      <a href={link} target="_blank">
        <p>{title}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
