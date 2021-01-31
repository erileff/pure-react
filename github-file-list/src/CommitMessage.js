import React from "react";
import PropTypes from "prop-types";

const CommitMessage = ({ commit }) => {
  return <span>{commit.message}</span>;
};

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

export default CommitMessage;
