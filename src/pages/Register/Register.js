import React from "react";
import './style.css'
import Cat from '../../assets/cat.png'
import Dog from '../../assets/dog.png'

function Register() {
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
                <input className="inputEmail" placeholder="Nome Completo"/>
                <input className="inputEmail" placeholder="Email"/>
                <input className="inputSenha" placeholder="Senha"/>
                <button className="buttonSubmit" onClick={e=>login()}>Finalizar meu cadastro</button>
                <text className="wantCreateAccount" >Já tenho uma conta.<a href="#">Fazer login</a></text>
            </div>
        </div>
    </div>
  );
}

export default Register;
