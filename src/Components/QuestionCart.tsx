import React from "react";
import { Wrapper, ButtonWrapper } from "./Question.styles";
import { AnswerObject } from "../App";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard = (props: QuestionProps) => (
  <Wrapper>
    <p className="number">
      Question: {props.questionNr} / {props.totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: props.question }} />
    <div>
      {props.answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={props.userAnswer?.correctAnswer === answer}
          userClicked={props.userAnswer?.answer === answer}
        >
          <button
            value={answer}
            onClick={props.callback}
            disabled={props.userAnswer ? true : false}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
