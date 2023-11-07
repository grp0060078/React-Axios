import React, { useState } from "react";
import "../styles/App.css"

const AddUser = ({ handleAddUser }) => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddUser(user);
    setUser({ name: "", email: "" });
  };

  return (
    <div className="add-user-container">
      <h2 className="add-user-header">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddUser;
