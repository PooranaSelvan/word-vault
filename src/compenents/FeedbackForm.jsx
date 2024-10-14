import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

// namma App.jsx la vacha onItemAdd inga props aa pass panrom
const FeedbackForm = ({ onItemAdd }) => {
  const [text, setText] = useState("");

  const [isDisabled, setIsDisabled] = useState(true); // ithu initially true va iruku

  const [message, setMessage] = useState("");

  const changeText = (e) => {
    e.preventDefault();

    if (text === "") {
      setIsDisabled(true);
      setMessage("");
    } else if (text.trim().length >= 10) {
      setIsDisabled(false);
      setMessage("");
    } else {
      setMessage("Text is too short. Please type at least 10 characters.");
      setIsDisabled(true);
    }

    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onItemAdd(text);
    setText("");
    setIsDisabled(true);
  };

  return (
    <Card changeColor={true}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter The Note To Store.."
          value={text}
          onChange={changeText}
        />
        <p className="message">{message && message}</p>
        <Button type="submit" version={"primary"} btnDisabled={isDisabled}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default FeedbackForm;
