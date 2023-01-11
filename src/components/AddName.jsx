import axios from "axios";
import { useState } from "react";
import React from 'react'
const AddName = ({getApi}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost={firstName,lastName,email,password}

      console.log(newPost);
      addTutorial(newPost)
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      console.log(firstName, lastName);
    };
 const addTutorial=async (newPost)=>{
    const url=" http://localhost:3002/posts"
    try {
        await axios.post(url,newPost)
        console.log(newPost)
    } catch (error) {
        console.log(error);
    }
    getApi()
 }   

  return (
    <div className="d-flex justify-content-center">
      <div className="register-form">
        <h1 className="form-title display-3">Person Contact</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your first name.."
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last name.."
              onChange={(e) => setLastName(e.target.value)}
              required
              value={lastName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            value={password}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="ADD"
            // onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  )
}

export default AddName