// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Update() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [id, setID] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         if (location.state && location.state.user) {
//             const { id, name, email } = location.state.user;
//             setID(id);
//             setName(name);
//             setEmail(email);
//         }
//     }, [location.state]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const values = { id, name, email };
//         axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
//             .then(res => {
//                 console.log(res);
//                 if (location.state && location.state.updateUser) {
//                     location.state.updateUser(values); 
//                 }
//                 navigate('/page1');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
//             <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//                 <h1>Update User</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor='id'>ID:</label>
//                         <input
//                             type='text'
//                             name='id'
//                             className='form-control'
//                             value={id}
//                             readOnly 
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='name'>Name:</label>
//                         <input
//                             type='text'
//                             name='name'
//                             className='form-control'
//                             placeholder='Enter UserName'
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className='mb-2'>
//                         <label htmlFor='email'>Email:</label>
//                         <input
//                             type='text'
//                             name='email'
//                             className='form-control'
//                             placeholder='Enter Email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button className='btn btn-success'>Update</button>
//                     <Link to="/page1" className='btn btn-primary ms-3'>Back</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Update;

// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Update = () => {

//     const [id, setID] = useState("");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const navigate = useNavigate();

//     useEffect(() => {
//         setID(localStorage.getItem("id"));
//         setName(localStorage.getItem("name"));
//         setEmail(localStorage.getItem("email"));
//     },[]);

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         console.log("Id...", id);
//         axios
//         .put('https://jsonplaceholder.typicode.com/users/$(id)',
//             {
//                 id: id,
//                 name: name,
//                 email: email,
//             })
//         .then(() => {
//                 navigate("../Table/Page2");
//             });
//     };


//     return (
//         <>
//         <h2>Update</h2>
//         <form>
//             <div className='mb-3'>
//                 <label className="form-label">ID</label>
//                 <input
//                   type="number"
//                          className="form-control"
//                         value={id}
//                 onChange={(e) => setID(e.target.value)}
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                          className="form-control"
//                         value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//             </div>

//             <div className='mb-3'>
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                          className="form-control"
//                         value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>

//             <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={handleUpdate}
//             >
//                 Update
//             </button>
//             </form>
//             </>

//     );
// };

// export default Update;

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
        
        const storedId = localStorage.getItem("id");
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");
        
        if (storedId && storedName && storedEmail) {
            setID(storedId);
            setName(storedName);
            setEmail(storedEmail);
        }
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedUsers = users.map(user => 
            user.id === parseInt(id) 
                ? { ...user, name: name, email: email } 
                : user
        );

        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Navigate to the new page and pass the updated users as state
        navigate("./Page2", { state: { updatedUsers } });
    };

    return (
        <>
            <h2>Update</h2>
            <form onSubmit={handleUpdate}>
                <div className='mb-3'>
                    <label className="form-label">ID</label>
                    <input
                        type="number"
                        className="form-control"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-3'>
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update
                </button>
            </form>
        </>
    );
};

export default Update;
