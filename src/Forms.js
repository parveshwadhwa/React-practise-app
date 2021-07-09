import React from 'react';

class Forms extends React.Component {
    render() {
        return (
            <div>
            <NameForm />
            <br /><br />
            <EssayForm />
            <br /><br />
            <FlavourForm />
            <br /><br />
            <Reservation />
            </div>
        );
    }
}

class NameForm extends React.Component 
{
    
    constructor(props)
    {
        super(props);
        this.state = {value: ''};

    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('A name was submitted' + this.state.value);
    }

    render()
    {
        return(
                
            <div>
                <form onSubmit={this.handleSubmit}>
                 <label htmlFor="name">
                     Name:
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

class EssayForm extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {value: ''}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.value);
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }
    render()
    {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
             <label htmlFor="name">
                 Name:
                 <textarea type="text" value={this.state.value} onChange={this.handleChange} />
             </label>
             <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

class FlavourForm extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {value: 'coconut'};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert('your favourite flavour is '+ this.state.value);

    }


    render()
    {
        return(
                  <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                            Pick Your Favourite colour:
                            <select value={this.state.value} onChange={this.handleChange} >
                                <option value="grapefruit">GrapFruit</option>
                                <option value="mango">Mango</option>
                                <option value="coconut">Coconut</option>
                                <option value="kiwi">Kiwi</option>
                            </select>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                  </div>
        );
    }
}

class Reservation extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {isGoing: true, numberOfGuestes: 2};
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }
    render()
    {
        return(
                 <div>
                     <form>
                         <label htmlFor="">
                             <h2>IS GOING:</h2>
                             <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                        
                         </label>

                         <br /><br />
                         <label htmlFor="">
                             <h2>NUMBER OF GUESTS: </h2>
                             <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                         </label>
                     </form>
                 </div>
        );
    }
}

export default Forms;