import React from "react";
import PropTypes from "prop-types";

const User = ({ icon, username }) => {
  return (
    <div className="question-footer-container">
      <img src={icon} alt="Icon" className="image" />
      <label>{username}</label>
    </div>
  );
};

User.propTypes = {
  icon: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default User;
