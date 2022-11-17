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
                <p className="subdescriptionHome">Nosso dever é fazer bem aquele que te faz bem. Em nosso petshop você encontrará todo o apoio e suporte para 
                seu bixinho, temos profissionais treinados e totalmente capacitados para dar aquele que te fez bem o melhor dia da sua vida.</p> 
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