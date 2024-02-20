// src/components/Question.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Question.css'; // Import custom CSS

const Question = ({ quizName, question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    // Reset the timer to 10 seconds for each new question
    setTimeLeft(10);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [question]); // Include question as a dependency to reset the timer when the question changes

  useEffect(() => {
    if (timeLeft === 0) {
      onAnswer(false);
    }
  }, [timeLeft, onAnswer]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h1>{quizName}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card text-center">
            <div className="card-body">
              <h2 className="card-title mb-4">{question.text}</h2>
              <p className="timer mb-4">Time Left: {timeLeft}s</p>
              <ul className="list-group">
                {question.options.map((option) => (
                  <li
                    key={option}
                    className={`list-group-item ${selectedOption === option ? 'active' : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => onAnswer(selectedOption === question.correctAnswer)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
