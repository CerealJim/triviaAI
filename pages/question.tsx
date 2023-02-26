// import React, { useState } from "react";
// import styles from "@/styles/Question.module.css";
// import { TriviaQuizProps } from "../types/triviaQueston";

// const TriviaQuestion: React.FC<TriviaQuizProps> = ({
//   question,
//   options = [],
//   answer,
// }) => {
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [totalScore, setTotalScore] = useState(0);
//   const [allAnswered, setAllAnswered] = useState(false);

//   const handleOptionSelect = (option: string) => {
//     setSelectedOption(option);
//   };

//   const handleAnswerSubmit = () => {
//     if (selectedOption === answer) {
//       setScore(score + 1);
//     } else {
//       setScore(score + 0);
//     }
//   };

//   const optionsCheck = () => {
//     // console.log(options, "options");
//     if (options !== undefined) {
//       return options.map((option, index) => (
//         <li
//           key={index}
//           className={selectedOption === option ? "selected" : ""}
//           onClick={() => handleOptionSelect(option)}
//         >
//           <input
//             type="radio"
//             name="option"
//             value={option}
//             checked={selectedOption === option}
//             onChange={() => handleOptionSelect(option)}
//           />
//           {option}
//         </li>
//       ));
//     }
//   };

//   return (
//     <div>
//       <h2>{question}</h2>
//       <ul>{optionsCheck()}</ul>
//       <button onClick={handleAnswerSubmit}>Submit Answer</button>
//       {score !== 0 && <p>Your score: {score}</p>}
//     </div>
//   );
// };

// export default TriviaQuestion;

import React, { useState } from "react";
import styles from "@/styles/Question.module.css";
import { TriviaQuizProps } from "../types/triviaQueston";

interface TriviaQuestionProps {
  question: string;
  options: string[];
  answer: string;
  // handleAnswerSubmit: (score: number) => void;
}

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options,
  answer,
  // handleAnswerSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  // const handleSubmit = () => {
  //   const score = selectedOption === answer ? 1 : 0;
  //   console.log(score);
  //   handleAnswerSubmit(score);
  // };

  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.question}>{question}</h2>
      <form className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={index} className={styles.option}>
            <input
              type="radio"
              id={option}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </form>
      {/* <button onClick={handleSubmit}>Submit Answer</button> */}
    </div>
  );
};

export default TriviaQuestion;
