import React from "react";
import "../styles/App.css"

const DeleteUser = ({ user, handleDeleteUser, setDeletingUser }) => {
  const confirmDelete = () => {
    handleDeleteUser(user.id);
    setDeletingUser(null);
  };

  return (
    <div className="delete-user-container">
      <h2 className="delete-user-header">Delete User</h2>
      <p className="confirmation-message">Are you sure you want to delete {user.name}?</p>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Yes
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setDeletingUser(null)}
      >
        No
      </button>
    </div>
  );
};

export default DeleteUser;
