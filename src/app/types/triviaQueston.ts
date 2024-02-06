export interface TriviaQuizProps {
  question: string;
  options: string[];
  answer: string;
  // onAnswerSubmit: (selectedAnswer: string) => void;
}

export interface TriviaQuizData {
  question: string;
  options?: string[];
  answer: string;
}
