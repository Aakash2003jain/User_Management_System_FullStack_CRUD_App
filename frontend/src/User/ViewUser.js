import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default function ViewUser() {
    const [user,setUser] =useState({
        name:"",
        username:"",
        email:""
    })

    const {id} =useParams();

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
  return (
    <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 m-2 shadow'>
                    <h2 className='text-center m-4'>User Details</h2>

                    <div className='card'>
                        <div className='card-header'>
                            Details of user id:  {user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name: </b>
                                    {user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>Username: </b>
                                    {user.username}
                                </li>                                
                                <li className='list-group-item'>
                                    <b>E-mail: </b>
                                    {user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-danger my-2' to={"/"}>Back</Link>
                </div>
            </div>
    </div>
  )
}
