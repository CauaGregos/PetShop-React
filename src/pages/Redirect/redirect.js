
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";

import { useNavigate } from "react-router";

const Redirect = () => {
    const navigate = useNavigate();
    const [agendamentos,setAgendamentos] = useState([{}]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        !user&&navigate('/');
        setTimeout(() =>{
            axios.get('http://localhost:5092/api/Home/Cliente',{headers: { Authorization: 'Bearer '+ user.token }})
            .then((res) => {navigate('/ScheduleView')}).catch(e=>{})
            axios.get('http://localhost:5092/api/Home/Admin',{headers: { Authorization: 'Bearer '+ user.token }})
            .then((res) => {navigate('/Admin')}).catch(e=>{})
        },500)
        
    }, []);
    return(
        <div>
            <h1>Redirecionando....</h1>
        </div>
    )

};

export default Redirect;