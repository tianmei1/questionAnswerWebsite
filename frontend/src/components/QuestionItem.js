import React from "react";

function QuestionItem({ question }) {
  return (
    <div className="question-item">
      <div className="question-content">
        <p className="question-title">{question.title}</p>
        <div className="question-text">{question.text}</div>
      </div>
      <div className="question-footer">
        Asked by: <span>{question.user}</span>
      </div>
    </div>
  );
}

export default QuestionItem;
