/* eslint-disable react/prop-types */

import UserCard from "./UserCard";

function UserList({ users, onDelete, onSelect, selectedUsers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={onDelete}
          onSelect={onSelect}
          isSelected={selectedUsers?.includes(user.id)}
        />
      ))}
    </div>
  );
}

export default UserList;
