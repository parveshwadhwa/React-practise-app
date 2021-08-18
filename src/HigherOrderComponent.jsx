import React from 'react';
import WithData from './with-data';

class HigherOrderComponent extends React.Component {

    render()
    {
        return(
            <div className="container">
            <h1>Hii</h1>
            <h2>{this.props.name}</h2>
            <h2>{this.props.email}</h2>
            posts: {
                this.props.data.map(post => (<div className="post" key={post.id}> 
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </div>)
                )
            }
        </div>
        );
    }
}

export default WithData(HigherOrderComponent, 'https://jsonplaceholder.typicode.com/posts');