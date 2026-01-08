import React from 'react';

const Card = ({ title, description, image, githubLink,source }) => {
  return (
    <div
      className="card bg-dark text-light shadow-sm border border-secondary rounded-4"
      style={{ width: '100%', maxWidth: '20rem' }}
    >
      <img
        src={image}
        className="card-img-top rounded-top-4"
        alt={`${title} Screenshot`}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-light-50" style={{ fontSize: '0.95rem' }}>
          {description}
        </p>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light rounded-pill btn-sm"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  );
};

export default Card;
