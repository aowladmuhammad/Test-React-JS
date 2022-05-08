import React, { useEffect, useState } from 'react';

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>External Users</h3>
      {
        <ol>{users.map(user => <li key={user.name}>{user.name}</li>)}</ol>
      }

      {
        users.map(user => <User key={user.id} name={user.name} username={user.username} email={user.email}></User>)
      }

    </div>
  );
};

function User(props) {
  return(
    <div className='single-user'>
      <h4>{props.name}</h4>
      <p><span>username:</span> {props.username}</p>
      <p><span>email:</span> {props.email}</p>
    </div>
  );
};

export default ExternalUsers;