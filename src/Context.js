import React from 'react';
import Guest from './Guest';
class Context extends React.Component 
{
    render()
    {
        return(
                 <div>
                     <h3>User Component</h3>
                     <Guest />
                 </div>
        );
    }
}

export default Context;