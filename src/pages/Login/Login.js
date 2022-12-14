
import React, { useState,useEffect } from "react";
import './styles.css'
import Cat from '../../assets/cat.png'
import Dog from '../../assets/dog.png'
import { useNavigate } from "react-router";
import AuthService from "../../services/AuthService";

function Login() {
    const [mensage,setMensage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        // se existir o user, redirecionar para a tela de agendamento
        if(user){
            navigate('/ScheduleView')
        }
    }, []);
    
    async function handleSubmit() {
        let email = document.getElementById('email').value
        let senha = document.getElementById('senha').value
    
        if (!email || !senha) {
            setMensage("Preencha o email e a senha para continuar!");
        } else {
            AuthService.login(email, senha).then(
                () => {
                    navigate("/Redirect");
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMensage(resMessage);
                }
            );
        }
    };

  return (
    <div className="containerLogin">
        <div className="userView">
            <img className="dogImage" src={Dog}/>
            <img className="catImage" src={Cat}/>

            <div className="textView">
                <p className="descriptionLogin">Aqui você encontra tudo para seu pet!</p> 
            </div>
            <div className="subTextView">
                <p className="subdescription">Nosso dever e fazer bem à aquele que te faz bem</p> 
            </div>
        
        </div>
        <div className="loginView">
            <div style={{marginTop:'30%',textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                <input id="email" placeholder="Email"/>
                <input type={'password'} id="senha" placeholder="Senha"/>
                <p className="wantCreateAccount"><a href="/register">Quero criar minha conta</a></p>
                <button className="buttonSubmitLogin" onClick={e=>handleSubmit()}>Enviar</button>
                <p>{mensage}</p>
            </div>
        </div>
    </div>
  );
}

export default Login;
