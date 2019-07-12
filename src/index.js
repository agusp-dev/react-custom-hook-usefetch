import React from 'react';
import { render } from 'react-dom'
import useFetch from './custom-hooks/useFetch'

function App() {

    const users = useFetch('https://jsonplaceholder.typicode.com/users', [])

    return (
      <div className='data'>
          <h1>Users</h1>
          <ul>
              {users.loading && <p>Cargando</p>}
              {users.data && users.data.map(user => (
                  <li key={user.id}>{user.name}</li>
            ))}
          </ul>
      </div>
    );
}

render(<App />, document.getElementById('root'))
