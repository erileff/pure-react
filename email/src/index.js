import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Email({ email }) {
  var { sender, subject, date, message } = email;
  return (
    <div className="email">
      <input type="checkbox" />
      <div className="pin">
        <FontAwesomeIcon icon="thumbtack" />
      </div>
      <div className="content">
        <div className="line1">
          <div className="sender">{sender}</div>
          <div className="subject">{subject}</div>
          <div className="date">{date}</div>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

var email = {
  sender: "React Newsletter",
  subject: "React Newsletter - Issue 36",
  date: "Jul 15",
  message: `React Newsletter Issue 36 - July 15th Read this issue on the web

  http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme`,
};

ReactDOM.render(<Email email={email} />, document.getElementById("root"));
