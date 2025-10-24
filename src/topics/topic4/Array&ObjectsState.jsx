import React, {useState} from "react";

// You can store arrays, objects, or even more
// Complex data Structures in state.

// COUNTER = {id:1, value:0}
// When 1 counter: [{id: 1, value: 0}]
// When 2 counter: [{id: 1, value: 0}, {id: 2, value: 0}]
// When 3 counter: [{id: 1, value: 0}, {id: 2, value: 0}, {id: 3, value: 0}]

function ArrayObjectsState() {

    const [counters, setCounters] = useState([{id: 1, value: 0}])
    const addCounter = () => {
        setCounters([...counters, {id: counters.length + 1, value: 0}]);
    };

    const incrementCounter = (id) => {
        setCounters(counters.map(counter => 
            counter.id === id ? {...counter, value: counter.value + 1} : counter
        )
    );
    };

    return (
        <div>
            <button onClick={addCounter}>Add Counter</button>
            <ul>
                {counters.map(counter => (
                    <li key={counter.id}>
                        Counter {counter.id}: {counter.value}
                        <button onClick={() => incrementCounter(counter.id)}>Increment</button>
                    </li>
                ))}
            </ul>

        </div>
    );

}

export default ArrayObjectsState;