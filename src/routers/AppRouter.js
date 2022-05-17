import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Banner } from '../components/Banner';
import { Home } from '../container/Home';

export default function AppRouter() {


    return (
        <BrowserRouter>
            <Banner />
            <Routes>
                
                <Route path="/" element={<Home />} />
                
            </Routes>
        </BrowserRouter>
    );
};