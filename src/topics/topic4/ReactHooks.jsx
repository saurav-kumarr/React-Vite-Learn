import { useState } from "react";
import './hooks.css'
function ReactHooks(){

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return(
        <div className='app-container'>
            <h1>Counter Value: {count}</h1>
            <input type="number"
                    value={step}
                    onChange={(e) => setStep(parseInt(e.target.value))} />
            <button onClick={() => setCount(count + step)}>Increment</button>
            <button onClick={() => setCount(count - step)}>Decrement</button>
        </div>
    );
}

export default ReactHooks;