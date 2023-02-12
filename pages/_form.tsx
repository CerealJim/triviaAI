import React, { useState, useEffect } from "react";
import TriviaQuestion from "./_question";

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

  // State for difficulty and topic
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");

  // Question array that we push AI generated questions
  const questions = [];
  const question = "What is the capital of France?";
  const options = ["Paris", "London", "Berlin", "Rome"];
  const answer = "Paris";

  // API handler using user responses
  const handleClick = async () => {
    setLoading(true);
    const result = await fetch(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: "Write a story about a superhero who saves the world",
        }),
      }
    );

    const json = await result.json();
    setResponse({ data: json.choices[0].text, success: true });
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
      <label>
        Difficulty:
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="" disabled>
            Select Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <label>
        Topic:
        <select value={topic} onChange={handleTopicChange}>
          <option value="" disabled>
            Select Topic
          </option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
          <option value="science">Science</option>
        </select>
      </label>

      <button onClick={handleClick}>Start</button>
      {loading ? (
        <p>Loading...</p>
      ) : response.success ? (
        // {questions.map((questionData, index) => (
        //   <TriviaQuestion
        //   key={index}
        //   question={questionData.question}
        //   options={questionData.options}
        //   answer={questionData.answer}
        //   />
        // ))}
        <TriviaQuestion question={question} options={options} answer={answer} />
      ) : null}
    </div>
  );
};

export default TriviaForm;
