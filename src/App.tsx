import React, { useState } from "react";
//Components
import QuestionCard from "./Components/QuestionCart";
import { fetchQuizQuestions } from "./API";

// Types
import { Difficulty, QuestionType, QuestionCategory } from "./API";

const TOTAL_QUESTION = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(
    fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY,
      QuestionType.TRUEORFALSE,
      QuestionCategory.EntertainmentJapaneseAnimeManga
    )
  );

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        question={questions[number].question}
        answers={questions[number].answers}
        callback={checkAnswer}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        totalQuestion={TOTAL_QUESTION}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

//https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=boolean
