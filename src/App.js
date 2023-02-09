import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import {Navbar, ChannelDetail, VideoDetail, Feed, SearchFeed} from './components'
const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#0000'}} >
        <Navbar></Navbar>
        <Routes>
            <Route path= '/' exact element ={<Feed></Feed>}></Route>
            <Route path ='/video/:id' element = {<VideoDetail></VideoDetail>}></Route>
            <Route path ='/channel/:id' element = {<ChannelDetail/>}></Route>
            <Route path ='/search/:id' element = {<SearchFeed/>}></Route>
        </Routes>
        
    </Box>
    </BrowserRouter>
)

export default App