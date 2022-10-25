
import React from "react";
import './styles.css'
import Cat from '../assets/cat.png'
import Dog from '../assets/dog.png'

function Login() {
    const login = () => {

    };
  return (
    <div className="container">
        <div className="userView">
            <img className="dogImage" src={Dog}/>
            <img className="catImage" src={Cat}/>

            <div className="textView">
                <text className="description">Aqui você encontra tudo para seu pet!</text> 
            </div>
            <div className="subTextView">
                <text className="subdescription">Nosso dever e fazer bem à aquele que te faz bem?</text> 
            </div>
        
        </div>
        <div className="loginView">
            <div style={{marginTop:'30%'}}>
                <input className="inputEmail" placeholder="Email"/>
                <input className="inputSenha" placeholder="Senha"/>
                <text className="wantCreateAccount" >----<a href="/register">Quero criar minha conta</a>----</text>
                <button className="buttonSubmit" onClick={e=>login()}>Enviar</button>
            </div>
        </div>
    </div>
  );
}

export default Login;
