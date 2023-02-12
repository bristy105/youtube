import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constant';

const selectedCategories = 'New';
const Sidebar = () => (
    <Stack
        direction='row'
        sx={{
            overflowY:'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'},

        }}
        >
            {categories.map((category) => {
                 console.log(category.name);
                <button className='category-btn'
                    style={{
                        background:category.name === selectedCategories 
                        && '#FC1503'
                    }}>
                    <span>{category.name}</span>
                </button>
            })}
        </Stack>
) 


export default Sidebar;