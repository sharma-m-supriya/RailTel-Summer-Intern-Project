// import React from 'react';
// import TableComponent from './TableComponent';

// const Page2 = () => {
//   const data = [
//     { id: 1, title: 'Product A', price: 100 },
//     { id: 2, title: 'Product B', price: 150 },
//   ];

//   const columns = ['id', 'title', 'price'];

//   return (
//     <div>
//       <h1>Page 2</h1>
//       <TableComponent data={data} columns={columns} />
//     </div>
//   );
// };

// export default Page2;
import React from 'react';
import FetchData2 from '../Home/FetchData2';
import { Link } from 'react-router-dom';
import ButtonAppBar from '../Navbar/Navbar';
import Vector from '../Assests/BlueVector2.png';

const Page2 = () => {
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
      <div className='d-flex justify-content-end my-10' style={{ marginRight: '25px' }} >
      <Link to='/create' className='bg-black text-white py-2 px-4 rounded mt-4 inline-block mr-4 courier-prime-regular'>Create</Link>
      </div>
      <div className='tablecontainerpage'>
        <FetchData2 />
      </div>
      </div>
      {/* <img id="vector" src={Vector} alt='Vector' /> */}
    </>
  );
};

export default Page2;

