import React from 'react';
import './Pyramid.css';

const PyramidBlock = ({ text }) => {
  return (
    <div className="pyramid-block">{text}</div>
  )
}

const Pyramid = ({ rows }) => {

  const renderRow = (inputRow) => {
    const row = [];

    for (let i = 0; i < inputRow.length; i++) {
      row.push(<PyramidBlock text={inputRow[i]} />);
    }

    return <div className="row">{row}</div>;
  };

  const pyramid = [];

  for (let i = 0; i < rows.length; i++) {
    console.log(i);
    pyramid.push(renderRow(rows[i]));
  }

  return <div className="pyramid">{pyramid}</div>;
};

export default Pyramid;
