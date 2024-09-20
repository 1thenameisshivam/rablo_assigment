/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import Instructions from "./components/Instructions";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data.users) {
        setUsers(data.users);
        setFilteredUsers(data.users);
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      setError(
        "An error occurred while fetching users. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (id) => {
    const filtered = users.filter((user) => user.id.toString() === id);
    setFilteredUsers(filtered);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(
      (user) => !selectedUsers.includes(user.id)
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedUsers([]);
  };

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <Instructions />
      <SearchBar onSearch={handleSearch} />
      {selectedUsers.length > 0 && (
        <button
          onClick={handleDeleteSelected}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 mb-4"
        >
          Delete Selected ({selectedUsers.length})
        </button>
      )}
      <UserList
        users={filteredUsers}
        onDelete={handleDelete}
        onSelect={handleSelect}
        selectedUsers={selectedUsers}
      />
    </div>
  );
}

export default App;
