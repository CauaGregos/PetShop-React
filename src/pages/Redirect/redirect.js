
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";

import { useNavigate } from "react-router";

const Redirect = () => {
    const navigate = useNavigate();
    const [agendamentos,setAgendamentos] = useState([{}]);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        // if not exist user back to login
        !user&&navigate('/');
        // setTimeout for the user look that information before redirecting
     
        setTimeout(() =>{
            axios.get('http://localhost:5092/api/Home/Admin',{headers: { Authorization: 'Bearer '+ user.token }})
            .then((res) => {navigate('/Admin');}).catch(e=>{
                axios.get('http://localhost:5092/api/Home/Cliente',{headers: { Authorization: 'Bearer '+ user.token }})
                .then((res) => {navigate('/ScheduleView')}).catch(e=>{localStorage.clear();})
            }) 
        },500)
    }, []);
    return(
        <div>
            <h1>Redirecionando....</h1>
        </div>
    )

};

export default Redirect;