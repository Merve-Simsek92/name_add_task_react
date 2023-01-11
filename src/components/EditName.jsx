import React,{useState,useEffect} from 'react'
import axios from "axios";


const EditName = ({editItem,getApi, setEditItem}) => {

    
  const { id, firstName: newFirstName, lastName: newLastName , email: newEmail,password:newPassword } = editItem;
  const [firstName, setFirstName] = useState(newFirstName);
  const [lastName, setLastName] = useState(newLastName);
  const [email, setEmail] = useState(newEmail);
  const [password, setPassword] = useState(newPassword);

  
  useEffect(() => {
   
    setFirstName(newFirstName);
    setLastName(newLastName);
    setEmail(newEmail);
    setPassword(newPassword)
  }, [newFirstName,newLastName,newEmail,newPassword]);


  const editName = async (id, post) => {
    const url = " http://localhost:3002/posts";
    try {
      await axios.put(`${url}/${id}`, post);
    } catch (error) {
      console.log(error);
    }
    getApi();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editName(id, { firstName, lastName,email,password });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEditItem();
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="register-form">
        <h1 className="form-title display-3"> Edit Person Contact</h1>
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
              value={firstName  || ""}
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
              value={lastName  || ""}
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
              value={email  || ""}
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
            value={password  || ""}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="SAVE"
            // onSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default EditName