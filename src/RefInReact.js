import React from 'react';

class RefInReact extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {value: ""};
        // creating ref

        this.textInput = React.createRef();
    }

    componentDidMount = () => {
        this.textInput.current.focus();
    };

    handleSubmit = (e) => {
           e.preventDefault();
           this.setState({value: this.textInput.current.value});
    }
    render()
    {
        return(
                 <div>

                         Password: {this.state.value}

                           <br />
                         <form onSubmit={this.handleSubmit} >
                             Name: <input type="text" />
                             <br />
                             <br />

                             Address: <input type="text"  ref={this.textInput} />

                             <br />
                             <br />

                             <button type="submit">Click me</button>
                         </form>
                 </div>
        );
    }
}

export default RefInReact;