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
        <Paper elevation={3} className="mx-auto shadow-lg bg-black h-[24em] w-[36em]">
            <div className="bg-black shadow-sm shadow-black">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-24 w-48 origin-bottom-right bg-neutral-900 outline outline-black -outline-offset-8">
                    <div className="z-10 flex flex-col items-center gap-2">
                        <span className="text-white text-2xl font-bold">{title}</span>
                    </div>
                </div>
            </div>

            <div className="h-[20em] w-[32em] border-2 border-black bg-gradient-to-br from-sky-700 to-transparent text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
                <div>
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
                <Button variant="contained" onClick={handleAddButtonClick} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px] bg-green text-white">
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
                <Paper className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-w-xs w-full h-80 bg-white shadow-lg">
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
