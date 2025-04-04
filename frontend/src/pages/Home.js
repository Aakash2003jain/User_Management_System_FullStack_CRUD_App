import React, { use, useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");

      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();

    }catch(error){
      console.error("Error in deleting the user",error);
    }
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>  
                  <td>{user.username}</td> 
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-outline-danger mx-2" to={`/view-user/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-danger mx-2" to={`/edituser/${user.id}`}>Edit</Link>
                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
