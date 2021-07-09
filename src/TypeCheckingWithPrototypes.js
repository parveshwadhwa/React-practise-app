import React from 'react';
import PropTypes from 'prop-types';

class TypeCheckingWithPrototypes extends React.Component 
{
    render()
    {
        return(
                 <div>
                       <h1>Hello   {this.props.name}</h1>
                       <h3>{this.props.roll}</h3>
                 </div>
        );
    }
}

TypeCheckingWithPrototypes.propTypes = {
    name: PropTypes.string.isRequired
};

TypeCheckingWithPrototypes.defaultProps = {
      roll: 45
};
export default TypeCheckingWithPrototypes;