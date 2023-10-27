
import React, { useState, useEffect } from "react";
import { getAllUsers, createUser, updateUser, deleteUser } from "./api";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'


function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users: ", error));
  }, []);

  const handleAddUser = (user) => {
    createUser(user)
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => console.error("Error adding user: ", error));
  };

  const handleEditUser = (user) => {
    updateUser(user)
      .then(() => {
        const updatedUsers = users.map((u) =>
          u.id === user.id ? user : u
        );
        setUsers(updatedUsers);
        setEditingUser(null);
      })
      .catch((error) => console.error("Error updating user: ", error));
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        setDeletingUser(null);
      })
      .catch((error) => console.error("Error deleting user: ", error));
  };

  
  return (
    <div className="App">
      <h1>User Management</h1>
      <hr></hr>
      <UserList users={users} setEditingUser={setEditingUser} setDeletingUser={setDeletingUser} />
      <AddUser handleAddUser={handleAddUser} />
      {editingUser && <EditUser user={editingUser} handleEditUser={handleEditUser} setEditingUser={setEditingUser} />}
      {deletingUser && <DeleteUser user={deletingUser} handleDeleteUser={handleDeleteUser} setDeletingUser={setDeletingUser} />}
    </div>
  );
}

export default App;
