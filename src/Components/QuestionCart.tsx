import React from "react";

type QuestionProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard = (props: QuestionProps) => (
  <div>
    <p className="number">
      Question: {props.questionNr} / {props.totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: props.question }} />
    <div>
      {props.answers.map((answer) => (
        <div>
          <button onClick={props.callback} disabled={props.userAnswer}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
