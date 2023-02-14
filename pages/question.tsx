import React from "react";
import styles from "@/styles/Question.module.css";
import { TriviaQuestionProps } from "../types/triviaQueston";

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options,
  answer,
}) => {
  console.log(options, "question");
  return (
    <div>
      <h2>{question}</h2>
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
