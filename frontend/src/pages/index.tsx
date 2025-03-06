import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { Button, Typography } from "@mui/material";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [updateUser, setUpdateUser] = useState({ id: "", name: "", email: "" });

  // Create a new user
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUsers([response.data, ...users]);
      setNewUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  };

  // Update a user
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${apiUrl}/users/${updateUser.id}`, { name: updateUser.name, email: updateUser.email });
      setUpdateUser({ id: "", name: "", email: "" });
      setUsers(
        users.map((user) => {
          if (user.id === parseInt(updateUser.id)) {
            return { ...user, name: updateUser.name, email: updateUser.email };
          }
          return user;
        })
      )
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  // Delete a user
  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  // Fetch all users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      <h1 className="text-center font-bold text-2xl">User Management App</h1>

      {/* Create User */}
      <form onSubmit={createUser} className="flex space-x-2 justify-center">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md p-2"
          value={newUser?.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
          value={newUser?.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create
        </button>
      </form>

      {/* Update User */}
      <form onSubmit={handleUpdateUser} className="flex space-x-2 justify-center">
        <input
          type="text"
          placeholder="ID"
          className="border border-gray-300 rounded-md p-2"
          value={updateUser?.id}
          onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-md p-2"
          value={updateUser?.name}
          onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2"
          value={updateUser?.email}
          onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
        />
        <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
          Update
        </button>
      </form>

      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <CardComponent key={user.id} card={user} />
            <button className="py-2 px-2 text-white bg-red-500 rounded hover:bg-red-400" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}