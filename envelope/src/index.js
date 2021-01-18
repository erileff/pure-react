import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AddressLabel({ address }) {
  const { name, address1, address2 } = address;
  return (
    <div className="address">
      <span className="name">{address.name}</span>
      <br />
      <span className="address1">{address.address1}</span>
      <br />
      <span className="address2">{address.address2}</span>
    </div>
  );
}

function Stamp() {
  return (
    <div className="stamp">
      <img
        src="https://media.officedepot.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_1665,q_auto,w_1250/c_pad,h_1665,w_1250/v1/products/541545/541545_o01_102020?pgw=1&pgwact=1"
        alt="Stamp"
      />
    </div>
  );
}

function Envelope({ toPerson, fromPerson }) {
  return (
    <div className="envelope">
      <div className="fromAddress">
        <AddressLabel address={fromPerson} />
      </div>
      <Stamp />
      <div className="toAddress">
        <AddressLabel address={toPerson} />
      </div>
    </div>
  );
}

const ericaAddress = {
  name: "Erica Leff",
  address1: "123 Fake St.",
  address2: "Boston, MA 02118",
};

const toAddress = {
  name: "Mrs. Receiver",
  address1: "123 Fake St.",
  address2: "San Francisco, CA 94101",
};

ReactDOM.render(
  <Envelope fromPerson={ericaAddress} toPerson={toAddress} />,
  document.querySelector("#root")
);
