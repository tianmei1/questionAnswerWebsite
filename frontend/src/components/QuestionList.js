import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import icon from "../icon.svg";

function QuestionList({ token, user }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/questions/")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <div className="button-container">
        <div className="icon-conatiner">
          <img src={icon} alt="Icon" className="image" />
          <label>{user.user.username}</label>
        </div>
        <button className="ask-question-button">Ask question</button>
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
