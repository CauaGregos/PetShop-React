import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../Login/Login';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} />      
            </Routes>
        </BrowserRouter>
        
    )
}