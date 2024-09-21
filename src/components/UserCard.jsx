/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function UserCard({ user, onDelete, onSelect, isSelected }) {
  return (
    <div
      className={`border p-4 rounded-lg shadow-md ${
        isSelected ? "bg-blue-100" : ""
      }`}
    >
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">
        {user.firstName} {user.lastName}
      </h2>
      <p>ID: {user.id}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <div className="mt-4 flex justify-between">
        <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
        <div>
          <button
            onClick={() => onDelete(user.id)}
            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
          >
            Delete
          </button>
          <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
            Edit
          </button>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(user.id)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
