import React, {useState} from 'react';

export default function UseStateHook()
{
    // useState returns an array
    // const nameStateVariable = useState("rahul");
    // const name = nameStateVariable[0];
    // const setName = nameStateVariable[1];

    // De-Structuring (best way)

    const [name,setName] = useState("Rahul");
    const [roll, setRoll] = useState("101");
    const [subject, setSubject] = useState([{sub: "Math"}]);
    const handleClick = () => {
        setName("prince");
        setRoll(768);
    }
        return(
                 <div>
                     <h1>
                         Your Name is {name} <br />
                         <button type="button" onClick={handleClick}>Change Name And Roll</button>
                     </h1>
                     <h2>
                         Your Roll No. is {roll}
                     </h2>
                 </div>
        );
}