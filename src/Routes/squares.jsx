import { useState, Fragment } from "react";
import Header from "./header";
import "./squares.sass";

export default function Squares() {
  const [result, setResult] = useState(null);

  function clickOnSquare(event) {
    const target = event.target;

    if (!target.classList.contains("squares")) return;

    !target.classList.contains("active")
      ? target.classList.add("active")
      : target.classList.remove("active");
  }

  function submitSquares() {
    const squares = document.querySelectorAll(".squares");

    [...squares].every((square) => {
      const styleSquare = getComputedStyle(square);

      if (
        (styleSquare.backgroundColor === "rgb(0, 0, 255)" &&
          !square.classList.contains("active")) ||
        (styleSquare.backgroundColor !== "rgb(0, 0, 255)" &&
          square.classList.contains("active"))
      ) {
        setResult("Bad");
        return false;
      }

      setResult("Good");
      return true;
    });
  }

  return (
    <Fragment>
      <Header />
      <div onClick={clickOnSquare}>
        <div className="squares square1"></div>
        <div className="squares square2"></div>
        <div className="squares square3"></div>
        <div className="squares square4"></div>
        <div className="squares square5"></div>
        <div className="squares square6"></div>
      </div>
      <button onClick={submitSquares}>Check</button>
      <span>{result}</span>
    </Fragment>
  );
}
