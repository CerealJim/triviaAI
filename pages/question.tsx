// import React from "react";
// import styles from "@/styles/Question.module.css";
// import { TriviaQuestionProps } from "../types/triviaQueston";

// const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
//   question,
//   options = [],
//   answer,
// }) => {
//   const optionsCheck = () => {
//     console.log(options, "options");
//     if (options !== undefined) {
//       return options.map((option, index) => <li key={index}>{option}</li>);
//     }
//   };

//   // console.log(options, "options");
//   return (
//     <div>
//       <h2>{question}</h2>
//       <ul>{optionsCheck()}</ul>
//       <p>Answer: {answer}</p>
//     </div>
//   );
// };

// export default TriviaQuestion;

import React, { useState } from "react";
import styles from "@/styles/Question.module.css";
import { TriviaQuestionProps } from "../types/triviaQueston";

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options = [],
  answer,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === answer) {
      setScore(1);
    } else {
      setScore(0);
    }
  };

  const optionsCheck = () => {
    console.log(options, "options");
    if (options !== undefined) {
      return options.map((option, index) => (
        <li
          key={index}
          className={selectedOption === option ? styles.selected : ""}
          onClick={() => handleOptionSelect(option)}
        >
          {option}
        </li>
      ));
    }
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>{optionsCheck()}</ul>
      <button onClick={handleAnswerSubmit}>Submit Answer</button>
      {score !== 0 && <p>Your score: {score}</p>}
    </div>
  );
};

export default TriviaQuestion;
