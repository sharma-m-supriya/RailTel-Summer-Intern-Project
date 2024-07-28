import React, { useEffect, useState } from 'react';
import { CardContent, Typography, Button, Paper, Modal, TextField } from '@mui/material';

const RCard = ({ title, apiEndpoint }) => {
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [newItem, setNewItem] = useState({ title: '' });

    const handleAddButtonClick = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setNewItem({ title: '' });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAddItem = async () => {
        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                body: JSON.stringify({ item_part_code: newItem.title }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const addedItem = await response.json();
            setData(prevData => [
                ...prevData,
                {
                    id: addedItem.id,
                    title: addedItem.title
                }
            ]);
            handleCloseModal();
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    useEffect(() => {
        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json.map((item, index) => ({
                    id: item.id,
                    title: item.title
                })));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [apiEndpoint]);

    return (
        <Paper elevation={3} className="mx-auto rounded-lg shadow-lg bg-black h-[24em] w-[28em]">
       <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                    <div className="z-10 flex flex-col items-center gap-2">
                        <span className="text-black text-4xl font-bold">{title}</span>
                    </div>
                </div>
            </div>

            <div className="h-[20em] w-[24em] border-2 border-sky-700 rounded-[1.5em] bg-gradient-to-br from-sky-700 to-transparent text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
                <div>
                    {/* <h1 className="text-[2em] font-medium">{title}</h1> */}
                    <CardContent className="p-4 max-h-40 overflow-y-auto">
                        {data.length === 0 ? (
                            <Typography variant="body1">No data available</Typography>
                        ) : (
                            data.map(item => (
                                <Typography key={item.id} variant="body1" className="mb-2">
                                    <span className="font-bold">{item.id}. </span>
                                    {item.title}
                                </Typography>
                            ))
                        )}
                    </CardContent>
                </div>
                <Button variant="contained" onClick={handleAddButtonClick} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px] bg-green text-white">
                    <p>Add Item</p>
                    <svg
                        className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                        stroke="currentColor"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </Button>
            </div>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="add-item-modal"
                aria-describedby="modal-to-add-new-item"
            >
                <Paper className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-w-xs w-full h-80 bg-white rounded-lg shadow-lg">
                    <Typography variant="h6" className="mb-5">
                        Add New Item
                    </Typography>
                    <TextField
                        label="Title"
                        variant="outlined"
                        name="title"
                        value={newItem.title}
                        onChange={handleInputChange}
                        fullWidth
                        className="mb-5"
                    />
                    <div className="flex justify-between">
                        <Button variant="contained" onClick={handleAddItem} disabled={!newItem.title.trim()} style={{ backgroundColor: 'green', color: 'white' }}>
                            Add Item
                        </Button>
                        <Button variant="outlined" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </div>
                </Paper>
            </Modal>
        </Paper>
    );
};

export default RCard;


// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardContent, Typography, Button, Paper, Modal, TextField } from '@mui/material';

// const RCard = ({ title, apiEndpoint }) => {
//     const [data, setData] = useState([]);
//     const [openModal, setOpenModal] = useState(false);
//     const [newItem, setNewItem] = useState({ title: '' });

//     const handleAddButtonClick = () => {
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setNewItem({ title: '' });
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewItem({ ...newItem, [name]: value });
//     };

//     const handleAddItem = async () => {
//         try {
//             const response = await fetch(`http://172.27.41.72:5566/api/post/item_part_code`, {
//                 method: 'POST',
//                 body: JSON.stringify({ item_part_code: newItem.title }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const addedItem = await response.json();
//             setData(prevData => [
//                 ...prevData,
//                 {
//                     id: addedItem.Item_part_code_id || addedItem.Item_make_id || addedItem.Item_model_id || addedItem.Item_type_id || prevData.length,
//                     title: addedItem.Item_part_code || addedItem.Item_make || addedItem.Item_model || addedItem.Item_type || addedItem.title || 'N/A'
//                 }
//             ]);
//             handleCloseModal();
//         } catch (error) {
//             console.error('Error adding item:', error);
//         }
//     };
//     useEffect(() => {
//         fetch(apiEndpoint)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 console.log('Fetched data:', json); 
//                 setData(json.map((item, index) => ({
//                     id: item.Item_part_code_id || item.Item_make_id || item.Item_model_id || item.Item_type_id || index,
//                     title: item.Item_part_code || item.Item_make || item.Item_model || item.Item_type || 'N/A'
//                 })));
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, [apiEndpoint]);

//     return (
//         <Paper elevation={3} className="mx-auto my-2 bg-white bg-opacity-80 backdrop-blur-lg">
//             <Card
//                 className="max-h-60 overflow-y-auto rounded-lg bg-white"
//                 style={{ fontFamily: 'Martel, serif', fontWeight: 300, fontStyle: 'normal' }}
//             >
//                 <CardHeader
//                     title={title}
//                     className="flex justify-between items-center backdrop-blur-lg bg-white bg-opacity-10 text-gray-800"
//                     action={
//                         <Button variant="contained" className="ml-auto" onClick={handleAddButtonClick}>
//                             Add
//                         </Button>
//                     }
//                 />
//                 <CardContent className="p-4 max-h-40 overflow-y-auto">
//                     <div>
//                         {data.length === 0 ? (
//                             <Typography variant="body1">No data available</Typography>
//                         ) : (
//                             data.map(item => (
//                                 <div key={item.id} className="mb-2">
//                                     <Typography variant="body1" className="flex items-center">
//                                         <span className="font-bold">{item.id}. </span>
//                                         {item.title}
//                                     </Typography>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </CardContent>
//             </Card>

//             <Modal
//     open={openModal}
//     onClose={handleCloseModal}
//     aria-labelledby="add-item-modal"
//     aria-describedby="modal-to-add-new-item"
// >
//     <Paper className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-w-lg w-full h-80 animate-fadeInSlideUp">
//         <Typography variant="h6" className="mb-5">
//             Add New Item
//         </Typography>
//         <TextField
//             label="Title"
//             variant="outlined"
//             name="title"
//             value={newItem.title}
//             onChange={handleInputChange}
//             fullWidth
//             className="mb-5"
//         />
//         <div className="flex justify-between">
//             <Button variant="contained" onClick={handleAddItem} disabled={!newItem.title.trim()}>
//                 Add Item
//             </Button>
//             <Button variant="outlined" onClick={handleCloseModal}>
//                 Cancel
//             </Button>
//         </div>
//     </Paper>
// </Modal>
//         </Paper>
//     );
// };

// export default RCard;
// import React, { useEffect, useState } from 'react';
// import { Card, CardHeader, CardContent, Typography, Button, Paper, Modal, TextField } from '@mui/material';

// const RCard = ({ title, apiEndpoint }) => {
//     const [data, setData] = useState([]);
//     const [openModal, setOpenModal] = useState(false);
//     const [newItem, setNewItem] = useState({ title: '' });

//     const handleAddButtonClick = () => {
//         setOpenModal(true);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//         setNewItem({ title: '' });
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewItem({ ...newItem, [name]: value });
//     };

//     const handleAddItem = async () => {
//         try {
//             const response = await fetch(apiEndpoint, {
//                 method: 'POST',
//                 body: JSON.stringify({ title: newItem.title }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const addedItem = await response.json();
//             setData([...data, addedItem]);
//             handleCloseModal();
//         } catch (error) {
//             console.error('Error adding item:', error);
//         }
//     };

//     useEffect(() => {
//         fetch(apiEndpoint)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(json => {
//                 console.log('Fetched data:', json);
//                 setData(json);
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, [apiEndpoint]);

//     return (
//         <Paper elevation={3} className="mx-auto my-2 bg-white bg-opacity-80 backdrop-blur-lg">
//             <Card
//                 className="max-h-60 overflow-y-auto rounded-lg bg-white"
//                 style={{ fontFamily: 'Martel, serif', fontWeight: 300, fontStyle: 'normal' }}
//             >
//                 <CardHeader
//                     title={title}
//                     className="flex justify-between items-center backdrop-blur-lg bg-white bg-opacity-10 text-gray-800"
//                     action={
//                         <Button variant="contained" className="ml-auto" onClick={handleAddButtonClick}>
//                             Add
//                         </Button>
//                     }
//                 />
//                 <CardContent className="p-4 max-h-40 overflow-y-auto">
//                     <div>
//                         {data.length === 0 ? (
//                             <Typography variant="body1">No data available</Typography>
//                         ) : (
//                             data.map(item => (
//                                 <div key={item.id} className="mb-2">
//                                     <Typography variant="body1" className="flex items-center">
//                                         <span className="font-bold">{item.id}. </span>
//                                         {item.title}
//                                     </Typography>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </CardContent>
//             </Card>

//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 aria-labelledby="add-item-modal"
//                 aria-describedby="modal-to-add-new-item"
//             >
//                 <Paper className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-w-lg w-full h-80 animate-fadeInSlideUp">
//                     <Typography variant="h6" className="mb-5">
//                         Add New Item
//                     </Typography>
//                     <TextField
//                         label="Title"
//                         variant="outlined"
//                         name="title"
//                         value={newItem.title}
//                         onChange={handleInputChange}
//                         fullWidth
//                         className="mb-5"
//                     />
//                     <div className="flex justify-between">
//                         <Button variant="contained" onClick={handleAddItem} disabled={!newItem.title.trim()}>
//                             Add Item
//                         </Button>
//                         <Button variant="outlined" onClick={handleCloseModal}>
//                             Cancel
//                         </Button>
//                     </div>
//                 </Paper>
//             </Modal>
//         </Paper>
//     );
// };

// export default RCard;
