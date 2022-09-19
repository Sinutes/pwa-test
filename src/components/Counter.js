import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = (props) => {
    let [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: "-30px" }}>
            <div>
                <h3>Test PWA</h3>

                <Button variant="contained" onClick={increment}>+</Button>
                <span> {count} </span>
                <Button variant="contained" onClick={decrement}>-</Button>
            </div>
        </div>
    );
};

export default Counter;