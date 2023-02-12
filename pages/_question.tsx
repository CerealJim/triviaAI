import React from "react";

interface TriviaQuestionProps {
  question: string;
  options: string[];
  answer: string;
}

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options,
  answer,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default TriviaQuestion;
