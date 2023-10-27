import React from "react";

const DeleteUser = ({ user, handleDeleteUser, setDeletingUser }) => {
  const confirmDelete = () => {
    handleDeleteUser(user.id);
    setDeletingUser(null);
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete {user.name}?</p>
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
