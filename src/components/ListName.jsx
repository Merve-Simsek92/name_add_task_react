import React , {useState} from 'react'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditName from './EditName';
import axios from 'axios';

const ListName = ({data,getApi}) => {

const [editItem, setEditItem] = useState("");
const deleteName=async (id)=>{
    const url=" http://localhost:3002/posts"
    try {
    await axios.delete(`${url}/${id}`)
   
    } catch (error) {
        
    } 
getApi()

}

  return (

    <div className="container mt-4">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">First Name </th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col" className="text-center">
            Edit
          </th>
        </tr>
      </thead>
    <tbody>
        {data.map((item)=>{
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                    <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                
                    onClick={() => setEditItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={()=>deleteName(item.id)}
                    
                  />
                    </td>
                </tr>
            )
        })}



    </tbody>
         
    </table> 
    { editItem ? (<EditName  editItem={editItem} setEditItem={setEditItem} getApi={getApi} /> ) : []}
    </div>
  
  )
}

export default ListName