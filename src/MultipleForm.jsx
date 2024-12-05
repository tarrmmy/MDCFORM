import React, { useState } from "react";

const MultiUserRegistration = () => {
  const [users, setUsers] = useState([
    { id: Date.now(), name: "", email: "", password: "" },
  ]);

  // Handle input change
  const handleInputChange = (id, field, value) => {
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  // Add a new user form
  const addUserForm = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: Date.now(), name: "", email: "", password: "" },
    ]);
  };

  const removeUserForm = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Users:", users);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Register Multiple Users</h1>
      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <div
            key={user.id}
            className="p-4 border rounded-md mb-4 shadow-md relative"
          >
            <h2 className="text-lg font-semibold mb-2">User {index + 1}</h2>
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                value={user.name}
                onChange={(e) =>
                  handleInputChange(user.id, "name", e.target.value)
                }
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) =>
                  handleInputChange(user.id, "email", e.target.value)
                }
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={user.password}
                onChange={(e) =>
                  handleInputChange(user.id, "password", e.target.value)
                }
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>
            {users.length > 1 && (
              <button
                type="button"
                onClick={() => removeUserForm(user.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addUserForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
        >
          Register Another
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit All
        </button>
      </form>
    </div>
  );
};

export default MultiUserRegistration;
