// src/components/AskQuestionModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../Modal.css";

Modal.setAppElement("#root"); // This is to avoid screen readers issues

const AskQuestionModal = ({
  isOpen,
  onRequestClose,
  fetchQuestions,
  token,
  user,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/questions/",
        { title, text, user },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchQuestions();
      onRequestClose();
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New question"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <h2>New question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            className="input-group"
            placeholder="Enter the question title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea
            value={text}
            className="input-group"
            placeholder="Write your question here"
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </Modal>
  );
};

export default AskQuestionModal;
