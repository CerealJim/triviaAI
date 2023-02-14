import React from "react";
import styles from "@/styles/Question.module.css";
import { TriviaQuestionProps } from "../types/triviaQueston";

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options = [],
  answer,
}) => {
  const optionsCheck = () => {
    console.log(options, "options");
    if (options !== undefined) {
      return options.map((option, index) => <li key={index}>{option}</li>);
    }
  };

  // console.log(options, "options");
  return (
    <div>
      <h2>{question}</h2>
      <ul>{optionsCheck()}</ul>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default TriviaQuestion;
