import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Cart} from '../Components';
import Navigation from './Navigation';

const Routing = () => {
    return (
        <BrowserRouter>
        <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
