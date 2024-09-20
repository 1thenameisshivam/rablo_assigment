/* eslint-disable react/no-unescaped-entities */
function Instructions() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-2">How to use this dashboard</h2>
      <ul className="list-disc pl-5">
        <li>View user information in the cards below</li>
        <li>Use the search bar to find a user by their ID</li>
        <li>
          Click on "View Details or Any Card" to see more information about a
          user
        </li>
        <li>Use the "Delete" button to remove a user from the list</li>
        <li>The "Edit" button is for display purposes only</li>
        <li>
          Select multiple users using the checkboxes and delete them in bulk
        </li>
      </ul>
    </div>
  );
}

export default Instructions;
