import React, { useEffect, useState } from 'react';
import "../App.css";
import Display from "./Display";
import Button from "./Buttons";

let buttons: Array<string> = [
  '1', '2', '3', '+',
  '4', '5', '6', '-',
  '7', '8', '9', '*',
  '0', 'C', '/', '<=',
  '.', '='
];

function Calculator() {
  const [display, setDisplay] = useState<string | null>(null);
  const [history, updateHistory] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

  let displayCache: string | null = null;

  const handleKeyboard = (event: KeyboardEvent | React.KeyboardEvent) => {
    const key = event.key;

  if (key === 'Enter' || key === 'NumpadEnter') {
    event.preventDefault(); 
    calculate();
    return;
  }

  if (key === '=' || key === 'Backspace' || key === 'c' || key === 'C') {
    event.preventDefault(); 
  }

  switch (key) {
    case '=':
      calculate();
      break;

    case 'Backspace':
      deleteSymbolClick();
      break;

    case 'c':
    case 'C':
      clearClick();
      break;

    default:
      if (buttons.includes(key)) {
        if (key === 'Enter' || key === 'NumpadEnter') return;

        buttonClick(key);
      }
      break;
  }

  console.log("eventkey " + key);
  };

  return (
    <div className='wrap'>
      <div className='calculator' tabIndex={0}>
        <Display value={display} />

        <div className='buttons'>
          {buttons.map((button) => (
            <Button
              key={button}
              title={button}
              onClick={() => {
                if (button === 'C') clearClick();
                else if (button === '=') calculate();
                else if (button === '<=') deleteSymbolClick();
                else buttonClick(button);
              }}
            />
          ))}
        </div>

        <br />
      </div>

      <div className='history'>
        {history.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );

  function calculate(): void {
    if (display != null) {
      displayCache = display;
      const result = safeEvaluation(display);

      if (result !== null && result !== undefined) {
        setDisplay(null);

        if (result.toString() === "Infinity") {
          setDisplay(null);
          alert("ДЕЛЕНІЕ НА НОЛЬ");
          return;
        }

        updateHistory(history.concat(`${display} = ${result}`));
        setDisplay(result.toString());
      } else {
        setDisplay(displayCache.toString());
      }
    }
  }

  function clearClick(): void {
    setDisplay(null);
  }

  function deleteSymbolClick() {
    setDisplay((display) => {
      if (display != null) {
        return display.slice(0, -1);
      } else return display;
    });
  }

  function buttonClick(buttonValue: string): void {
    setDisplay((prevDisplay) => {
      let newDisplay = prevDisplay ?? "";
      const operators = ['+', '-', '*', '/'];

      if (newDisplay.length >= 30) return newDisplay;

      const lastChar = newDisplay.slice(-1);

      if ((lastChar === '*' || lastChar === '/') && buttonValue === '-') {
        return newDisplay;
      }

      if (
        operators.includes(lastChar) &&
        operators.includes(buttonValue)
      ) {
        return newDisplay;
      }

      if (
        buttonValue === '.' &&
        (newDisplay === "" || operators.includes(lastChar))
      ) {
        return newDisplay;
      }

      if (buttonValue === '.') {
        const parts = newDisplay.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber.includes('.')) {
          return newDisplay;
        }
      }

      const parts = newDisplay.split(/[\+\-\*\/]/);
      const lastNumber = parts[parts.length - 1];

      if (
        /^\d$/.test(buttonValue) &&
        /^0\d*$/.test(lastNumber + buttonValue)
      ) {
        return newDisplay;
      }

      return newDisplay + buttonValue;
    });
  }
}

function safeEvaluation(expression: string) {
  try {
    return new Function(`'use strict'; return (${expression})`)();
  } catch (ex) {
    alert(`ошибка при вычислении ` + ex);
  }
}

export default Calculator;
