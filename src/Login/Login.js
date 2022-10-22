
import React from "react";
import './styles.css'
import Cat from '../assets/cat.png'
import Dog from '../assets/dog.png'

function Login() {
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

        </div>
    </div>
  );
}

export default Login;
