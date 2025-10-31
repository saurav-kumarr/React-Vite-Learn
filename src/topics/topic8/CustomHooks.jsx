
// Custom hooks in React are functions that let you reuse logic across
// multiple components.

import { useState } from "react";
import UseCounter from "./useCounter";

// Start with "use "

function CustomHooks() {

  const {count, increment, decrement, reset} = UseCounter(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomHooks;