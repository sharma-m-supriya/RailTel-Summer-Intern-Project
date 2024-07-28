import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Create() {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (event) => {
        event.preventDefault();
        // const values = { id, name, email };
        axios.post('https://jsonplaceholder.typicode.com/users', {
            id: id,
            name: name ,
            email : email,
            header,
        })
            .then(res => {
                console.log(res); 
                navigate('/page1');
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
                            name='id'
                            className='form-control'
                            placeholder='Enter ID'
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            placeholder='Enter UserName'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            name='email'
                            className='form-control'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/page1" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;

// import React, { useState, useContext } from "react";
// import { Button, Form } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
// import { v4 as uuid } from "uuid";
// import { DataContext } from './DataContext';

// function Create() {
//     const [id, setID] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
    
//     const { addUser } = useContext(DataContext);
//     let navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const ids = uuid();
//         let uniqueId = ids.slice(0, 8);

//         let a = name,
//             b = email;

//         addUser({ id: uniqueId, Name: a, Email: b });

//         navigate("/");
//     }

//     return (
//         <div>
//             <Form className="d-grid gap-2" style={{ margin: "15rem" }} onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formID">
//                     <Form.Control type="text" placeholder="Enter ID" required onChange={(e) => setID(e.target.value)}>
//                     </Form.Control>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formName">
//                     <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
//                     </Form.Control>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formEmail">
//                     <Form.Control type="text" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>
//                     </Form.Control>
//                 </Form.Group>
//                 <Button type="submit">Submit</Button>
//             </Form>
//         </div>
//     );
// }

// export default Create;
