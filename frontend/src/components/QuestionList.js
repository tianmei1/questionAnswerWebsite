import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import icon from "../icon.svg";
import AskQuestionModal from "./AskQuestionModal";
import User from "./User";

function QuestionList({ token, user, fetchQuestions, questions }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [token, fetchQuestions]);

  return (
    <div>
      <div className="button-container">
        <User icon={icon} username={user.username} />
        <button
          className="ask-question-button"
          onClick={() => setModalIsOpen(true)}
        >
          Ask question
        </button>
        <AskQuestionModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          fetchQuestions={fetchQuestions}
          token={token}
          user={user}
        />
      </div>

      <div className="question-container">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
