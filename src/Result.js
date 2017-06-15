import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
      <img className="result__image" src={result.image} alt={result.name} />
      <p className="result__title"> {result.name}</p>
      <p className="result__desc"> {result.desc}</p>
    </div>
    );
  }
}

export default Result;
