import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

function CreditCard({ card }) {
  let { name, cardNumber, expiration, bankName } = card;
  return (
    <div className="creditCard">
      <div className="bankName">{bankName}</div>
      <div className="cardNumber">{cardNumber}</div>
      <div className="firstFour">{cardNumber.substring(0, 4)}</div>
      <div className="validThru">VALID THRU</div>
      <div className="expiration">{expiration}</div>
      <div className="name">{name.toUpperCase()}</div>
    </div>
  );
}

const ericaCredit = {
  name: "Erica Leff",
  cardNumber: "1234 5678 8765 4321",
  expiration: "12/21",
  bankName: "Big Bank, Inc.",
};

ReactDOM.render(
  <CreditCard card={ericaCredit} />,
  document.querySelector("#root")
);
