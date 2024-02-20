// src/components/Quiz.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    id: 3,
    text: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
  {
    id: 4,
    text: 'Who wrote "Romeo and Juliet"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    id: 5,
    text: 'What is the capital of Japan?',
    options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
    correctAnswer: 'Tokyo',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default Quiz;
