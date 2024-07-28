import React from 'react';
import ButtonAppBar from '../Navbar/Navbar';
import Parent1 from '../Cards/Parent1';
import Parent2 from '../Cards/Parent2';
import Vector from '../Assests/Vector (3).png';

const Page3 = () => {
    return (
        <>
            <ButtonAppBar />

            <div className="overflow-hidden min-h-screen bg-gradient-to-r from-black to-green-900">
                <Parent2 />
                <Parent1 />
            </div>
        </>
    );
};

export default Page3;
