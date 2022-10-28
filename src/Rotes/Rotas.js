import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Schedule from '../pages/Schedule';
import ScheduleView from '../pages/ScheduleView';
import Redirect from '../pages/Redirect/redirect';
import AdminView from '../pages/Admin';
import Adminlist from '../pages/AdminList';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} /> 
                <Route path="/Home"  element={<Schedule/>} component={Schedule} /> 
                <Route path="/Register"  element={<Register/>} component={Register} />     
                <Route path="/ScheduleView"  element={<ScheduleView/>} component={ScheduleView} />    
                <Route path="/Redirect"  element={<Redirect/>} component={Redirect} />     
                <Route path="/Admin"  element={<AdminView/>} component={AdminView} />  
                <Route path="/AdminList"  element={<Adminlist/>} component={Adminlist} />      
            </Routes>
        </BrowserRouter>
        
    )
}