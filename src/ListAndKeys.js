import { render } from '@testing-library/react';
import React from 'react';

class ListAndKeys extends React.Component {
    render() {
        const posts = [
            { id: 1, title: "hello prince", content: "welcome to learning react" },
            { id: 2, title: "Installation", content: "you can install react from npm" },

        ];
        const listitems = this.props.numbers.map((number) => <ListItems value={number} key={number.toString()} />);
        return (
            <div>
                <ul>
                    {listitems}
                </ul>
                <Blog posts={posts} />
            </div>
        );
    }
}


function ListItems(props) {
    return <li>{props.value}</li>
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((pots) =>
                <li key={pots.id}>
                    {pots.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((pots) =>
        <div key={pots.id}>
            <h3>{pots.title}</h3>
            <p>{pots.content}</p>
        </div>
    );
    render()
    {
        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }
}

export default ListAndKeys;