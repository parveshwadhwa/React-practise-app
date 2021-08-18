import React from 'react';
import WithData from './with-data';

class UserList  extends React.Component{
    render()
    {
        return(
      <div className="container user-list">
          <h1>Users List</h1>
          {
              this.props.data.map(user =>
                
                <div className="post" key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                </div>

                )
          }
      </div>
        );
    }
}

export default WithData(UserList, 'https://jsonplaceholder.typicode.com/users');