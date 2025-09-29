import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../queries';

interface User {
  id: string;
  name: string;
}

interface UsersData {
  users: User[];
}

const UsersList: React.FC = () => {
  const { loading, error, data } = useQuery<UsersData>(GET_USERS);

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="users-list">
      <h2>👥 Users</h2>
      {data?.users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p><strong>ID:</strong> {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;