// src/components/Result.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Result.css';

const Result = ({ score }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h2>Quiz Completed!</h2>
        <p>Your score is: {score}/5</p>
      </div>
    </div>
  );
};

export default Result;
