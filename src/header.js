import React from 'react';

export const Header = (props) => {
  return (
    <div className="container">
      <div className="header">
        <h1>{props.title}</h1>
        <h2 className="header_subtitle">{props.subtitle}</h2>
      </div>
    </div>
  );
};

//Default props
Header.defaultProps = {
  title: "Indecision Bobko"
};
