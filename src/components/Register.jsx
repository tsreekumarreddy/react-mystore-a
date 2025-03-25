import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  const handleSubmit = () => {
    const chk = users.find((item) => item.email === user.email);
    if (chk) {
      alert("Email exists. Try with another email.");
      return;
    }
    
    setUsers([...users, user]);
    // setUser({ name: "", email: "", password: "" }); 
  };

  const handleDelete = (email) => {
    setUsers(users.filter((value) => value.email !== email));
  };

  return (
    <div className="App-Register-Row">
      <div className="App-Register-Box">
        <h3>Registration Form</h3>
        <p>
          <input
            type="text"
            placeholder="Enter Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email address"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="New password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </p>
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
        <p>
          <Link to="../login">Already a member? Login here!</Link>
        </p>
      </div>

      <div className="App-Register-Box">
        <h3>Userlist</h3>
        <table className="App-Register-Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>
                  <button onClick={() => handleDelete(value.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
