
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";

const ScheduleView = () => {
    const navigate = useNavigate();
    const [agendamentos,setAgendamentos] = useState([{}]);

    useEffect(() => {

        const user = AuthService.getCurrentUser();

        if(!user){
            setTimeout(() =>{
                navigate("/Redirect");
                window.location.reload();
            },1000)
        }
        axios.get('http://localhost:5092/api/Home/Cliente',{headers: { Authorization: 'Bearer '+ user.token }})
        .then((res) => {}).catch(e=>{alert('Você não tem permissao para estar aqui!');navigate('/Redirect');})

    
        axios.get(`http://localhost:5092/api/Agendamento/${user.user.email}`)
        .then((e) =>setAgendamentos([{id:e.data.id,email:e.data.email,data:e.data.data,horario:e.data.horario,pet:e.data.pet,especie:e.data.especie}]))
    }, []);

    const cancelarAtendimento = (id) => {
        const confirmar = window.confirm('Deseja mesmo cancelar seu atendimento?');

        confirmar && axios.delete(`http://localhost:5092/api/Agendamento/${id}`)
    };

    return(
        <div className="scheduleViewContainer">
            <h1 className="scheduleTitle">Seus Agendamentos</h1>
            <div className="formContainer">
                <form>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Nome do Pet</th>
                        <th>Especie</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentos.map(
                        (e) =>
                            <tr key={e.id}>
                                <td>{e.data}</td>
                                <td>{e.horario}</td>
                                <td>{e.pet}</td>
                                <td>{e.especie}</td>
                                <button onClick={()=>cancelarAtendimento(e.id)}>Cancelar</button>
                            </tr>
                    )}
                </tbody>
                </form>
            </div>
        </div>
    )

};

export default ScheduleView;