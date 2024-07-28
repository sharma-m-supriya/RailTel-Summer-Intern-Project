import React from 'react';
import { Grid } from '@mui/material';
import RCard from './RCard';

const ParentComponent1 = () => {
    return (
        <div>
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
        <div className="mx-auto my-10 courier-prime-bold">
            <Grid container spacing={3} className="grid grid-cols-1 md:grid-cols-1">
                <Grid item xs={12} sm={6} md={6} lg={6} className="flex justify-center">
                    <RCard title="Item Make" apiEndpoint="http://172.27.41.72:5566/api/item_make" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="flex justify-center">
                    <RCard title="Item Model" apiEndpoint="http://172.27.41.72:5566/api/item_model" />
                </Grid>
            </Grid>
        </div>
        </div>
    );
};

export default ParentComponent1;
