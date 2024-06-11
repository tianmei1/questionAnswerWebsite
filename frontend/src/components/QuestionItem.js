import React from "react";
import icon from "../icon.svg";
import User from "./User";

function QuestionItem({ question }) {
  return (
    <div className="question-item">
      <div className="question-content">
        <p className="question-title">{question.title}</p>
        <div className="question-text">{question.text}</div>
      </div>
      <div className="question-footer">
        <span> Asked by: </span>
        <User icon={icon} username={question.username} />
      </div>
    </div>
  );
}

export default QuestionItem;
