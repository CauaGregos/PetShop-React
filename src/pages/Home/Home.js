import React, { useState,useEffect } from "react";
import './style.css'
import Dog from '../../assets/banheiraDog.png'
import { useNavigate } from "react-router";
import AuthService from "../../services/AuthService";

export default function Home() {
    const [mensage,setMensage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        // se existir o user, redirecionar para a tela de agendamento
        if(user){
            navigate('/ScheduleView')
        }
       
    }, []);

  return (
    <div className="containerLogin">
        <div className="homeView">
            <img className="dogBanheira" src={Dog}/>        
        </div>
        <div className="loginView">
            <div style={{marginTop:'30%',textAlign:'center',alignSelf:'center',alignContent:'center'}}>

            <div className="subTextView">
                <p className="subdescriptionHome">Nosso dever e fazer bem à aquele que te faz bem? Nosso dever e fazer bem à aquele que te faz bem?
                Nosso dever e fazer bem à aquele que te faz bem? Nosso dever e fazer bem à aquele que te faz bem?</p> 
            </div>
            <div style={{alignSelf:'center',alignItems:'center',display:'flex',marginTop:100}}>
                <input id="emailSet" className="inputEmailCadastrar" placeholder="Email"/>
                <button onClick={e=>navigate(`/register/${document.getElementById('emailSet').value}`)} className="Cadastrar">Me cadastrar</button>
            </div>
            
            </div>
        </div>
        <div className="">

        </div>
    </div>
  );
}