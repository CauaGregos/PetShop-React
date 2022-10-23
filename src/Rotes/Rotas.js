import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../Login/Login';
import Register from '../Register/Register';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} /> 
                <Route path="/Register"  element={<Register/>} component={Register} />     
            </Routes>
        </BrowserRouter>
        
    )
}