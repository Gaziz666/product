import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>counter</h1>
            <div>{counter}</div>
            <button
                className={classes.btn}
                type="button"
                onClick={() => setCounter(counter + 1)}
            >
                increment
            </button>
        </>
    );
};
