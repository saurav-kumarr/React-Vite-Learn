import { useRef, useState, useEffect } from "react";

// useRef
// - persist values across renders
// - Does not cause the component to
// re-render when the value changes

function UseRef() {
    const [stateCount, setStateCount] = useState(0)
    const refCount = useRef(0);

    useEffect(() => {
        console.log('Component Re-rendered');
    });

    const incrementStateCount = () => {
        setStateCount(stateCount + 1);
    };

    const incrementRefCount = () => {
        refCount.current += 1;
        console.log(`Ref count: ${refCount.current}`);
    };



    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = '#FFFDD0';
    }

    const resetFocus = () => {
        inputRef.current.style.backgroundColor = '';
    }

    return(
        <div>
            <h1>Learn React </h1>
            <p>State Count: {stateCount}</p>
            <button onClick={incrementStateCount}>Increment State Count</button>

            <p>Ref Count: {refCount.current}</p>
            <button onClick={incrementRefCount}>Increment Ref Count</button>

            
            <input ref={inputRef} type="text" placeholder='Focus me'></input>
            <button onClick={focusInput}>Focus and Highlight</button>

            <button onClick={resetFocus}>Reset</button>
        </div>
    );
}

export default UseRef;