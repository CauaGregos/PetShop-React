
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";

import { useNavigate } from "react-router";

const Redirect = () => {
    const navigate = useNavigate();
    const [agendamentos,setAgendamentos] = useState([{}]);
    const user = AuthService.getCurrentUser();
    useEffect(() => {
       
        // se nao existir user, volto para o login
        !user&&navigate('/login');
 
        setTimeout(() =>{
            // mando requisicoes para os dois endpoints que verifica 
            // a permissao do usuario
            axios.get('http://localhost:5092/api/Home/Admin',{headers: { Authorization: 'Bearer '+ user.token }})
            .then((res) => {navigate('/Admin');}).catch(e=>{
                axios.get('http://localhost:5092/api/Home/Cliente',{headers: { Authorization: 'Bearer '+ user.token }})
                .then((res) => {navigate('/ScheduleView')}).catch(e=>{localStorage.clear();navigate('/login')})
            }) 
        },1000)
    }, []);

    const size = window.screen.width
    const windowHeight = window.screen.height
    return(
        <div>
            <img style={{alignSelf:'center',width:300,marginLeft:(size*0.4),marginTop:windowHeight*0.3}} src={require('../../assets/loading.gif')}></img>
        </div>
    )

};

export default Redirect;