// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Button, Table } from 'react-bootstrap';

// function FetchData() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     };

//     const handleDelete = (id) => {
//         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(() => {
//                 setData(data.filter(user => user.id !== id));
//             })
//             .catch(err => console.log(err));
//     };

//     const updateUser = (updatedUser) => {
//         const updatedData = data.map(user => user.id === updatedUser.id ? updatedUser : user);
//         setData(updatedData);
//     };

//     return (
//         <div className='container mx-auto h-420px border rounded-lg'>
//             <div className='mt-3'>
//                 <div className='table-container'>
//                     <Table striped bordered hover size='sm' className='bg-white'>
//                         <thead className='bg-blue-500 text-white sticky top-0'>
//                             <tr>
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Username</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col"></th>
//                                 <th scope="col"></th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-sm">
//                             {data.map((user, index) => (
//                                 <tr key={index}>
//                                     <td>{user.id}</td>
//                                     <td>{user.name}</td>
//                                     <td>{user.email}</td>
//                                     <td>
//                                         <Link to={{ pathname: '/update', state: { user, updateUser } }}>
//                                             <Button>Edit</Button>
//                                         </Link>
//                                     </td>
//                                     <td>
//                                         <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FetchData;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table, Pagination } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Import icons for left and right arrows

function FetchData() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setData(data.filter(user => user.id !== id));
            })
            .catch(err => console.log(err));
    };

    const updateUser = (updatedUser) => {
        const updatedData = data.map(user => user.id === updatedUser.id ? updatedUser : user);
        setData(updatedData);
    };

    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div style={{ backgroundColor: 'transparent', padding: '10px 0', textAlign: 'center' }}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

                .courier-prime-regular {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 400;
                    font-style: normal;
                }

                .courier-prime-bold {
                    font-family: 'Courier Prime', monospace;
                    font-weight: 700;
                    font-style: normal;
                }

                /* Custom styling for navigation arrows */
                .arrow-link {
                    display: inline-block;
                    color: white;
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    margin: 0 10px;
                }

                .arrow-link:hover {
                    text-decoration: underline;
                }

                .arrow-link:disabled {
                    cursor: not-allowed;
                    opacity: 0.5;
                }

                .pagination-info {
                    display: inline-block;
                    color: white;
                    margin: 0 20px;
                    font-size: 16px;
                }

                /* Remove table borders */
                .custom-table {
                    border-collapse: collapse; /* Ensure no spacing between table cells */
                    border: none; /* Remove default table border */
                    width: 100%; /* Ensure table occupies full width */
                }

                .custom-table th,
                .custom-table td {
                    border: none; /* Remove borders on table headers and data cells */
                    padding: 8px; /* Add padding to table cells */
                    text-align: left; /* Align text to the left */
                }
                `}
            </style>
        
            <div className='container mx-auto overflow-hidden' style={{ backgroundColor: 'black', borderRadius: '8px' }}>
                <div className='mt-3'>
                    <div className='table-container'>
                        <Table striped bordered hover size='sm' className='w-full bg-gradient-to-r from-black to-green-900 text-white custom-table'>
                            <thead className='bg-gradient-to-r from-black to-green-900 courier-prime-bold'>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="text-sm overflow-y-auto max-h-320px courier-prime-regular">
                                {currentItems.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={{ pathname: '/update', state: { user, updateUser } }}>
                                                <Button>Edit</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="pagination">
                            <button
                                className="arrow-link"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <BsChevronLeft /> Previous
                            </button>
                            <span className="pagination-info">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="arrow-link"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                               <BsChevronRight /> Next 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchData;
