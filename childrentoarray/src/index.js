import React from "react";
import ReactDOM from "react-dom";

const FirstChildOnly = ({ children }) => {
  return <div>First child: {React.Children.toArray(children).slice(0, 1)}</div>;
};

const LastChildOnly = ({ children }) => {
  return (
    <div>
      Last child: {React.Children.toArray(children).slice(-1)[0] || null}
    </div>
  );
};

const Tail = ({ number, children }) => {
  return (
    <div>
      Last {number} children: {React.Children.toArray(children).slice(-number)}
    </div>
  );
};

const Head = ({ number, children }) => {
  return (
    <div>
      First {number} children:{" "}
      {React.Children.toArray(children).slice(0, number)}
    </div>
  );
};

const Demo = () => {
  return (
    <div>
      <FirstChildOnly>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </FirstChildOnly>
      <br />
      <LastChildOnly>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </LastChildOnly>
      <br />
      <Head number={2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Head>
      <br />
      <Tail number={2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Tail>
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
