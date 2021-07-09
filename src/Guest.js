import React from 'react';
import {MyContext} from './App';

class Guest extends React.Component 
{
    render()
    {
        return(
                 <div>
                         <h3>Guest component</h3>
                         <MyContext.Consumer>
                             {({data, handleClick}) => (
                                 <div>
                             <h4>{data.name}     {data.value}</h4>
                             <button onClick={handleClick}>Change Value</button>
                             </div>
                             )}
                         </MyContext.Consumer>
                 </div>
        );
    }
}

export default Guest;