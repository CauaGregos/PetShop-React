import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Schedule from '../pages/Schedule';
import ScheduleView from '../pages/ScheduleView';
import Redirect from '../pages/Redirect/redirect';
import AdminView from '../pages/Admin';
import Adminlist from '../pages/AdminList';
import Logout from '../pages/Logout/Logout';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>} component={Login} /> 
                <Route path="/home"  element={<Schedule/>} component={Schedule} /> 
                <Route path="/register"  element={<Register/>} component={Register} />     
                <Route path="/scheduleview"  element={<ScheduleView/>} component={ScheduleView} />    
                <Route path="/redirect"  element={<Redirect/>} component={Redirect} />     
                <Route path="/admin"  element={<AdminView/>} component={AdminView} />  
                <Route path="/adminlist"  element={<Adminlist/>} component={Adminlist} /> 
                <Route path="/logout"  element={<Logout/>} component={Logout} /> 
                
            </Routes>
        </BrowserRouter>
        
    )
}