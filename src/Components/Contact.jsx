import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="wrapper">
      <form className="form">
        <div className="pageTitle title">Contact Us </div>
        <div className="secondaryTitle title">Please fill this form</div>
        <input type="text" className="name formEntry" placeholder="Name" />
        <input type="text" className="email formEntry" placeholder="Email"/>
        <textarea className="message formEntry" placeholder="Message"></textarea>
        <input type="checkbox" className="termsConditions" value="Term" />
        <label htmlFor="terms" className="termsLabel">I Accept the <span className="termsHighlight">Terms of Use</span> & <span className="termsHighlight">Privacy Policy</span>.</label><br />
        <button className="submit formEntry" onClick={() => console.log("Thanks!")}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
