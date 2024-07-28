import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios

function Create() {
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(res => {
                console.log(res); // Corrected the typo
                navigate('/page2');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 bordr bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='id'>ID:</label>
                        <input
                            type='text'
                            name='id' // Corrected the name attribute
                            className='form-control'
                            placeholder='Enter ID'
                            onChange={e => setValues({ ...values, id: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Enter UserName'
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control'
                            placeholder='Enter Email'
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/page2" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
