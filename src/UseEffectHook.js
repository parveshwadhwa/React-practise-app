import React, {useState, useEffect} from 'react';

export default function UseEffectHook()
{
    const [count, setCount] = useState(0);
    const [count1, downCount] = useState(50);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        downCount(count1 - 1);
    };



    useEffect(() => {
        console.log("use effect called");
    }, [count]);
    return(
              <div>
                   <h1>Count up: {count}</h1> 
                   <button type="button" onClick={handleIncrement}>Increment</button> 


                   <h1>Count down: {count1}</h1> 
                   <button type="button" onClick={handleDecrement}>Deccrement</button> 
              </div>
    );
}