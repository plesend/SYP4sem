import React, { useState } from "react";
import Button from "./Button";
import "../App.css";

const Counter : React.FC = () => {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount(count + 1);
      };
    
      const Reset = () => {
        setCount(0);
      };
    return(
        <div className="counter-div">
            <h1 className="count-h2">Counter</h1>
            <h2 className="count-h2">{count}</h2>
            <div className="button-group">
            <Button onClick={Increase} title="Increase" disabled={count >= 5} className="button increase" />
            <Button onClick={Reset} title="Reset" disabled={count === 0} className="button reset" />
            </div>
        </div>
    );
}

export default Counter;