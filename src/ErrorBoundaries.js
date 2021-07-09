import React from 'react';


class ErrorBoundaries extends React.Component
{
    render()
    {
        if(this.props.like === "no image")
        throw new Error("Image not found");
        return(
                 <div>
                       <img src={this.props.like} alt="My Pic" width="300px" />
                 </div>
        );
    }
}

export default ErrorBoundaries;