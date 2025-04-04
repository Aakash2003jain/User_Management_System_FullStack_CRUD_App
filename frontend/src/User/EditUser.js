import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate = useNavigate();
    const {id} =useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const [errors, setErrors] = useState({}); // Validation errors state

    const { name, username, email } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let validationErrors = {};
        if (!name.trim()) validationErrors.name = "Name is required";
        if (!username.trim()) validationErrors.username = "Username is required";
        if (!email.trim()) validationErrors.email = "Email is required";
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };



    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return; // Stop if validation fails
        try {
            await axios.put(`http://localhost:8080/user/${id}`, user);
            navigate("/");
        } catch (error) {
            console.error("Error uploading user:", error);
        }
    };
    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/user/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useState(()=>{
        loadUser();
    },[]);

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 m-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                placeholder='Enter your Name' 
                                name='name' 
                                value={name} 
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
                                placeholder='Enter your Username' 
                                name='username' 
                                value={username} 
                                onChange={handleChange}
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>E-mail</label>
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                placeholder='Enter your Email Address' 
                                name='email' 
                                value={email} 
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <button type='submit' className='btn btn-outline-danger'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
