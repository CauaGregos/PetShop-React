
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";


function Schedule() {
    const [am,setAm] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(!user){
            setTimeout(() =>{
                navigate("/");
                window.location.reload();
            },1000)
        }
        axios.get('http://localhost:5092/api/Home/Cliente',{headers: { Authorization: 'Bearer '+ user.token }})
        .then((res) => {setAm(res.data)}).catch(e=>{alert('Você não tem permissao para estar aqui!');navigate('/Register');localStorage.clear();})
    }, []);

  return (
    <div className="homeContainer">
        <h1 style={{fontSize:'10vh',color:'#FFF'}}>O Oásis do seu Pet!</h1>
        <h2 style={{fontSize:'5vh',color:'#FFF'}}>{am}</h2>
    </div>
  );
}

export default Schedule;
