import React, { useState, useEffect } from 'react';
import Robot from './components/Robot.js';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState('listPage');
  const [user, setUser] = useState(null);

  async function fetchUsers() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/users?size=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const fetchedUsers = await response.json();

      if (fetchedUsers && fetchedUsers.length > 0) {
        setUsers(fetchedUsers);
      } else {
        throw new Error('No users found');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function changePage(selectedUser) {
    setUser(selectedUser);
    setPage('infoPage');
  }

  function setHomePage(data) {
    setPage(data);
  }

  return (
    <>
      {page === 'listPage' ? (
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
          {users.map((user, index) => (
            <li key={user.id + index} style={{ margin: '10px', textAlign: 'center' }}>
              <img
                onClick={() => changePage(user)}
                src={user.avatar}
                alt='user avatar'
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  border: '3px solid #3498db',
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
              <p style={{ marginTop: '5px', fontSize: '14px' }}>
                {user.first_name} {user.last_name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <Robot onBack={setHomePage} user={user} />
      )}
    </>
  );
}

export default App;