import React from 'react';

class EventHandling extends React.Component {

    state = {id:1, name: "rahul"}; // state propert or state without constructor

    handlesubmit = (e) => {
        e.preventDefault();
        console.log('you clicked me');
    }

    handleClick = (id, e) => {
        e.preventDefault();
        console.log(id);
        console.log(e);

    };

    handleClickArg = (e) => {
        this.handleClick(this.state.id, e);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <button type="submit">Submit</button>
                </form>

                 <br />

                 {/* by passing arguement in event handler */}

                 <button onClick={this.handleClickArg}>
                      click me
                 </button>

                 {/* we can also pass this as following */}

                 <button onClick={e => {this.handleClick(this.state.id,e)}}>
                     click me twice
                 </button>

                 <button onClick={this.handleClick.bind(this, this.state.id)}>
                     click me thrice
                 </button>

            </div>
        );
    }
}

export default EventHandling;