
import React from 'react';

function Time() {
    const [count , setCount] = React.useState(0)
    const countPlus = () => {
        setCount(count + 1)
    }
    const countMinus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <button onClick={countMinus} className="minus">- Минус</button>
                <button onClick={countPlus} className="plus">Плюс +</button>
            </div>
        </div>
    );
}

export default Time;
