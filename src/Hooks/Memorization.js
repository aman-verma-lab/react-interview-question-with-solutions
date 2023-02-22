import { React, useMemo, useState } from 'react';

const Memorization = () => {
    const[count, setCount] = useState(0);
    const[count1, setCount1] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    const handleCount1 = () => {
        setCount1(count1 + 1);
    }
    
    const isEven = useMemo(() => {
        for(let i = 0; i > 100000; i++){
            console.log('abc', i);
        }
        var a = count % 2 == 0;
        return a
    }, [count]);

    return(
        <>
            <p>Count: {count} <span>{isEven ? 'even' : 'odd' }</span></p>
            <button type='button' onClick={handleCount}>Count</button>
            <p>Count1: {count1}</p>
            <button type='button' onClick={handleCount1}>Count 2</button>
        </>
    )
}

export default Memorization;