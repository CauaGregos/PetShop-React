
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import AuthService from "../../services/AuthService";

const Logout = () => {
   const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() =>{
            AuthService.logout();
            navigate('/');
        },500)
    }, []);
    return(
        <div>
            <h1>Você deslogou....</h1>
        </div>
    )

};

export default Logout;