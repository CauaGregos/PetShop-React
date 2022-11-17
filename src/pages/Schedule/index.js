
import React, { useState,useEffect } from "react";
import './style.css'
import Dog from '../../assets/banheiraDog.png'
import { useNavigate } from "react-router";
import axios from "axios";
import AuthService from "../../services/AuthService";



export default function Schedule() {
  const navegar = useNavigate();

  const voltar = () => {
    navegar('/ScheduleView')
  }
   
  const agendar =()=> {
    const user = AuthService.getCurrentUser();
    
    console.log(user.user.email ,
      document.getElementById('inputData').value,
      document.getElementById('inputHora').value,
      document.getElementById('inputNome').value,
      document.getElementById('inputEspecie').value,);

    axios.post("http://localhost:5092/api/Agendamento",{
      id: 0,
      email:user.user.email ,
      data: document.getElementById('inputData').value,
      horario: document.getElementById('inputHora').value,
      pet: document.getElementById('inputNome').value,
      servico: document.getElementById('select').value,
      especie: document.getElementById('inputEspecie').value,
      aprovado: false
    }).then((e)=>{navegar('/scheduleview')})

    

  }

  return (
    <div className="containerLogin">
        <div className="homeView">
            <img className="dogBanheira" src={Dog}/>        
        </div>
        <div className="loginView">
            <div style={{marginTop:'30%',textAlign:'center',alignSelf:'center',alignContent:'center'}}>

            <div className="subTextView">
                <p className="subdescriptionHome">Nosso dever é fazer bem aquele que te faz bem, em nosso petshop você encontrará todo o apoio e suporte para 
                seu bixinho, temos profissionais treinados e totalmente capacitados para dar aquele que te fez bem o melhor dia da sua vida.</p> 
            </div>
            </div>
        </div>
        <div className="scheduleFormView">
        <div>
            <div style={{marginTop:'17%',marginLeft:'5.5%'}}>
                <input className="inputNome" id="inputNome" placeholder="Nome do Pet"/>
                
       
                <input className="inputEspecie" id="inputEspecie"  placeholder="Espécie"/>
                <input className="inputData" id="inputData" type={'date'}  placeholder="DD/MM/AA"/>
                <input className="inputHora" id="inputHora" type={'time'} placeholder="XX:XX"/>
                <select id="select" className="selectSchedule">
                  <option>Banho</option>
                  <option>Banho e tosa</option>
                  <option>Banho e aparação de pelo</option>
                </select>
                <button onClick={e=>agendar()} className="buttonSubmitSchedule">Agendar</button>
                <button onClick={e=>voltar()} className="buttonCancelSchedule">Cancelar</button>
            </div>
        </div>
        </div>
    </div>
  );
}
