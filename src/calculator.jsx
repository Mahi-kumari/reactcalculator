import { useState } from "react";
import "./index.css"; // Import the styles

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(expression).toString()); // Evaluate the expression
    } catch {
      setResult("Error");
    }
  };

  // ✅ Define handleBack function
  const handleBack = () => {
    setExpression((prev) => prev.slice(0, -1)); // Removes last character
  };

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick(")")}>)</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("Math.sqrt(")}>√</button>
        <button onClick={() => handleClick("Math.sin(")}>sin</button>
        <button onClick={() => handleClick("Math.cos(")}>cos</button>
        <button onClick={calculate}>=</button>

        {/* ✅ Fixed: Now handleBack is defined */}
        <button onClick={handleBack} className="back">←</button>
      </div>
      <h3>Output: {result}</h3>
    </div>
  );
};

export default Calculator;
