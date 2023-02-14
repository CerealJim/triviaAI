import React, { useState, useEffect } from "react";
import TriviaQuestion from "./question";
import styles from "@/styles/Form.module.css";
import { TriviaQuestionProps } from "../types/triviaQueston";

interface OpenAIAPIResponse {
  data: string;
  success: boolean;
}
const apiKey = process.env.NEXT_PUBLIC_OPENAI_TOKEN;

const TriviaForm: React.FC = () => {
  const [response, setResponse] = useState<OpenAIAPIResponse>({
    data: "",
    success: false,
  });
  const [loading, setLoading] = useState(false);
  const [triviaQuestionProps, setTriviaQuestionProps] = useState<
    TriviaQuestionProps[]
  >([]);

  // State for difficulty and topic
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");

  // API handler using user responses
  const handleClick = async () => {
    setLoading(true);
    const result = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: `Give me 2 ${difficulty} trivia questions about ${topic} with 4 options and their answer in a json array format`,
        model: "text-davinci-003",
        temperature: 0,
        top_p: 1,
        max_tokens: 2000,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    });

    const json = await result.json();
    // console.log(json);

    try {
      const chatGptAnswer = json.choices[0].text;
      const parsedTrivia: TriviaQuestionProps[] = JSON.parse(
        chatGptAnswer
      ) as TriviaQuestionProps[];
      console.log(parsedTrivia);
      setTriviaQuestionProps(parsedTrivia);
    } catch (error) {
      console.error("error parsing chatgpt response");
    }

    // setResponse({ data: json.choices[0].text, success: true });
    setLoading(false);
  };

  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDifficulty(event.target.value);
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(event.target.value);
  };

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.userInput}>
          <label>Difficulty:</label>
          <select value={difficulty} onChange={handleDifficultyChange}>
            <option value="" disabled>
              Select Difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className={styles.userInput}>
          <label>Topic:</label>

          <select value={topic} onChange={handleTopicChange}>
            <option value="" disabled>
              Select Topic
            </option>
            <option value="geography">Geography</option>
            <option value="history">History</option>
            <option value="science">Science</option>
          </select>
        </div>
        <button className={styles.userStart} onClick={handleClick}>
          Start
        </button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          triviaQuestionProps.map(
            (questionData: TriviaQuestionProps, index: number) => (
              <TriviaQuestion
                key={index}
                question={questionData.question}
                options={questionData.options}
                answer={questionData.answer}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default TriviaForm;
