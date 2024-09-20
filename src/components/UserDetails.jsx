/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await response.json();
        if (data.id) {
          setUser(data);
        } else {
          throw new Error("Failed to fetch user details");
        }
      } catch (error) {
        setError(
          "An error occurred while fetching user details. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (isLoading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!user) return <div className="text-center mt-8">User not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-6">User Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-4">
          {user.firstName} {user.lastName}
        </h2>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Blood Group:</strong> {user.bloodGroup}
        </p>
        <p>
          <strong>Hair:</strong> {user.hair.color}, {user.hair.type}
        </p>
        <p>
          <strong>Address:</strong> {user.address.address}, {user.address.city},{" "}
          {user.address.state} {user.address.postalCode}, {user.address.country}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
