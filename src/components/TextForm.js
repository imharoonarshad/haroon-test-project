import React, { useState } from "react";

export default function TextForm(props) {
  const [textString, setText] = useState("");

  const handleUpClick = () => {
    let newText = textString.toUpperCase();
    setText(newText);
    props.showAlert("converted to upercase", "success");
  };
  const handleLoClick = () => {
    let newText = textString.toLowerCase();
    setText(newText);
    props.showAlert("converted  to lowercase", "success");
  };
  const firstLettercapitalize = () => {
    let firstchar = textString.charAt(0);
    let newText = firstchar.toUpperCase();
    setText(newText + textString.substring(1));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={textString}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",

              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={firstLettercapitalize}>
          Convert First Letter to Uppercase
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {textString.split("").length} words and {textString.length} characters
        </p>
        <p>{0.008 * textString.split("").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {textString.length > 0
            ? textString
            : "Enter something to preview it here"}
        </p>
      </div>
    </>
  );
}
