import React, { useState, useEffect } from "react";

const EditUser = ({ user, handleEditUser, setEditingUser }) => {
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(editedUser);
    setEditingUser(null);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={editedUser.name}
            onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setEditingUser(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
