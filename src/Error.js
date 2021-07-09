import React from "react";

class Error extends React.Component 
{
    state = {hasError: false}

    static getDerivedStateFromError(error)
    {
        return {hasError: true};
    }

    componentDidCatch(error, info)
    {
        console.log(error);
        console.log(info);
    }
    render()
    {
        if(this.state.hasError)
        {
            return <h3>error Image Not Found</h3>
        }
        return(
               <div>
                 {this.props.children}
               </div>
        );
    }
}

export default Error;