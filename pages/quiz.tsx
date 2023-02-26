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
import TriviaQuestion from "./question";
import { TriviaQuizData } from "../types/triviaQueston";

interface TriviaDataProps {
  quizData: TriviaQuizData[];
}

const TriviaQuiz: React.FC<TriviaDataProps> = ({ quizData = [] }) => {
  const [totalScore, setTotalScore] = useState(0);

  // const handleAnswerSubmit = (score: number) => {
  //   const newScore = totalScore + score;
  //   setTotalScore(newScore);
  // };

  // const handleSubmit = () => {
  //   const score = selectedOption === answer ? 1 : 0;
  //   console.log(score);
  //   handleAnswerSubmit(score);
  // };

  const handleSubmit = () => {
    console.log("submit button");
  };

  const renderResults = () => {
    return (
      <div>
        <h3>Your score is {totalScore}</h3>
      </div>
    );
  };

  return (
    <div>
      <div>
        {/* <TriviaQuestion
          question={question}
          options={options}
          answer={answer}
          handleAnswerSubmit={handleAnswerSubmit}
        /> */}

        {quizData.map((quizItem: TriviaQuizData, index: number) => (
          <TriviaQuestion
            key={index}
            question={quizItem.question}
            options={quizItem.options ? quizItem.options : []}
            answer={quizItem.answer}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Answer</button>
      {/* {renderResults()} */}
    </div>
  );
};

export default TriviaQuiz;
