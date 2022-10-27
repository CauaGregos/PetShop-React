import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Schedule from '../pages/Schedule';
import ScheduleView from '../pages/ScheduleView';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} /> 
                <Route path="/Home"  element={<Schedule/>} component={Schedule} /> 
                <Route path="/Register"  element={<Register/>} component={Register} />     
                <Route path="/ScheduleView"  element={<ScheduleView/>} component={ScheduleView} />     
            </Routes>
        </BrowserRouter>
        
    )
}