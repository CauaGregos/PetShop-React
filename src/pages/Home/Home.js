import React, { useState,useEffect } from "react";
import './style.css'
import Dog from '../../assets/banheiraDog.png'
import { useNavigate } from "react-router";


export default function Home() {
    const [mensage,setMensage] = useState('');
    const navigate = useNavigate()

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
            <button className="Cadastrar">Me cadastrar</button>
            </div>
        </div>
        <div className="">

        </div>
    </div>
  );
}