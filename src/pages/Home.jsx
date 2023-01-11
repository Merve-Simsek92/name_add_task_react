import axios from 'axios'
import React,{useEffect,useState} from 'react'
import AddName from '../components/AddName'
import ListName from "../components/ListName"
const Home = () => {
const [data, setData] = useState([])

// const api=axios.create({
// baseURL : `http://localhost:3200/posts`
//       })
useEffect(() => {
    getApi()
}, [])

 const  getApi= async ()=>{
    try {


      const { data } = await axios("http://localhost:3002/posts");
      console.log(data);
      setData(data);
     
  

        
    } catch (error) {
        console.log(error);
    }


 }   

  return (
  <div className='d-flex'>
<div className='m-3'><AddName  getApi={getApi} /></div>
<div className='m-3'> <ListName data={data} getApi={getApi} /></div>
 
 </div>
  )
}

export default Home