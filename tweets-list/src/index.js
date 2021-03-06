import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import "./index.css";

const TweetsList = ({ tweets }) => {
  return (
    <table className="tweet-list">
      <tbody>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </tbody>
    </table>
  );
};

TweetsList.propTypes = {
  tweets: PropTypes.array,
};

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

const testTweets = [
  {
    message: "This is a tweet component written in React that uses props.",
    gravatar: "06c0e3f4a6777c996e92cbaf1b535ff0",
    author: {
      handle: "erileff",
      name: "Erica Leff",
    },
    likes: 2,
    retweets: 0,
    timestamp: "2021-01-15 15:15:00",
  },
  {
    message: "This is a second message.",
    gravatar: "06c0e3f4a6777c996e92cbaf1b535ff0",
    author: {
      handle: "erileff",
      name: "Erica Leff",
    },
    likes: 2,
    retweets: 0,
    timestamp: "2021-01-25 15:15:00",
  },
];
Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

ReactDOM.render(
  <TweetsList tweets={testTweets} />,
  document.getElementById("root")
);
