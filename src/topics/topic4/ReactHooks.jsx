import { useState } from "react";
import './hooks.css'

// - State updates are async
// - You need to use updater function for multiple
// State updates

function ReactHooks(){

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const incrementTwice = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    return(
        <div className='app-container'>
            <h1>Counter Value: {count}</h1>
            <input type="number"
                    value={step}
                    onChange={(e) => setStep(parseInt(e.target.value))} />
            <button onClick={() => setCount(count + step)}>Increment</button>
            <button onClick={() => setCount(count - step)}>Decrement</button>
            <button onClick={incrementTwice}>+2</button>
        </div>
    );
}

export default ReactHooks;