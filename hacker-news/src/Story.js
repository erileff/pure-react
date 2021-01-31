import React from "react";
import PropTypes from "prop-types";
import Time from "./Time";

const Story = ({ story }) => (
  <span className="story">
    <h3 className="title">{story.title}</h3>
    <div className="subtext">
      <span className="score">{story.score} points</span>
      {" by "}
      <span className="user">{story.by}</span>{" "}
      <Time time={story.time} isUnixTime={true} />
      {" | "}
      <a href="#">flag</a>
      {" | "}
      <a href="#">hide</a>
      {" | "}
      <a href="#">{story.descendants} comments</a>
    </div>
  </span>
);

Story.propTypes = {
  story: PropTypes.object.isRequired,
};

export default Story;
