import React from 'react';

class CompositionVsInheritance extends React.Component
{
    render() 
    {
        return(
               <div>
                 <FancyBorder color="blue">
                       <h1 className="Dialog-title">
                           Welcome
                       </h1>
                       <p className="Dialog-message">
                           ThankYou Prince for visiting
                       </p>
                 </FancyBorder>
               </div>
        );
    }
}

function FancyBorder(props) 
{
    return(
             <div className={'FancyBorder FancyBorder-' + props.color}>
                 {props.children}
             </div>
    );
}



export default CompositionVsInheritance;