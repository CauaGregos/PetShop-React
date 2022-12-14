import React, { useEffect, useState } from "react";
import './style.css'
import Cat from '../../assets/cat.png'
import Dog from '../../assets/dog.png'
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import AuthService from "../../services/AuthService";
function Register() {
    const navigate = useNavigate();
    const [emailProp,setEmail] = useState();

    let {email} =  useParams();
    

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        // se existir o user, redirecionar para a tela de agendamento
        if(user){
            navigate('/ScheduleView')
        }
        setEmail(email);
    }, []);

    const register = () => {
       const nome = document.getElementById('inputNome').value
       const email = document.getElementById('inputEmail').value
       const senha = document.getElementById('inputSenha').value
    
       axios.post('http://localhost:5092/api/Perfil',{
        id: 0,
        nome: nome,
        email: email,
        senha: senha,
        role:'Cliente'
       }).then(e=> {window.alert('Conta criada com sucesso.');window.location.reload()})
       
    };
  return (
    <div className="containerRegister">
        <div className="userView">
            <img className="dogImage" src={Dog}/>
            <img className="catImage" src={Cat}/>

            <div className="textView">
                <text className="descriptionRegister">Aqui você encontra tudo para seu pet!</text> 
            </div>
            <div className="subTextView">
                <text className="subdescription">Nosso dever e fazer bem à aquele que te faz bem?</text> 
            </div>
        
        </div>
        <div className="loginView">
            <div style={{marginTop:'30%'}}>
                <input className="inputNome" id="inputNome" placeholder="Nome Completo"/>
                <input className="inputEmail" id="inputEmail" value={emailProp} placeholder="Email"/>
                <input className="inputSenha" id="inputSenha"  placeholder="Senha"/>
                <button className="buttonSubmitRegister" onClick={e=>register()}>Finalizar meu cadastro</button>
                <text className="wantCreateAccount" >Já tenho uma conta.<a href="/login">Fazer login</a></text>
            </div>
        </div>
    </div>
  );
}

export default Register;
