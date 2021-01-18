import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: "This is a tweet component written in React that uses props.",
  gravatar: "06c0e3f4a6777c996e92cbaf1b535ff0",
  author: {
    handle: "erileff",
    name: "Erica Leff",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2021-01-15 15:15:00",
};

LikeButton.propTypes = {
  count: PropTypes.number,
};

RetweetButton.propTypes = {
  count: PropTypes.number,
};

Message.propTypes = {
  text: PropTypes.string,
};

Time.propTypes = {
  time: PropTypes.string,
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};

Tweet.propTypes = {
  tweet: PropTypes.shape({
    message: PropTypes.string.isRequired,
    gravatar: PropTypes.string.isRequired,
    author: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
