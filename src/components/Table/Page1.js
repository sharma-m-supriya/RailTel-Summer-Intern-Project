// import React from 'react';
// import TableComponent from './TableComponent';

// const Page1 = () => {
//   const data = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Doe', age: 25 },
//   ];

//   const columns = ['id', 'name', 'age'];

//   return (
//     <div>
//       <h1>Page 1</h1>
//       <TableComponent data={data} columns={columns} />
//     </div>
//   );
// };


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import ButtonAppBar from '../Navbar/Navbar';
import FetchData from '../Home/FetchData';
//import Vector from '../Assests/BlueVector2.png';


const Page1 = () => {
    return ( 
        <>
            <ButtonAppBar />
            <div className="overflow-hidden min-h-screen bg-gradient-to-r from-black to-green-900">
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
                `}
            </style>
            <div className='d-flex justify-content-end my-10' style={{ marginRight: '25px' }}>
            <Link to='/create' className='bg-black text-white py-2 px-4 rounded mt-4 inline-block mr-4 courier-prime-regular'>Create</Link>
            </div>
            <FetchData />
            </div>
        </>
    );
};

export default Page1;


  
  
