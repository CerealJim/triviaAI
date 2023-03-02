import React, { useState } from "react";
import styles from "@/styles/Question.module.css";
import { TriviaQuizProps } from "../types/triviaQueston";

interface TriviaQuestionProps {
  question: string;
  options?: string[];
  answer: string;
  onOptionSelect: (selectedOption: string) => void;
}

const TriviaQuestion: React.FC<TriviaQuestionProps> = ({
  question,
  options = [],
  onOptionSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onOptionSelect(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.question}>{question}</h2>
      <form className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              selectedOption === option ? styles.selectedOption : ""
            }`}
          >
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
    </div>
  );
};

export default TriviaQuestion;
