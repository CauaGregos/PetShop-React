
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";

const AdminView = () => {

    const [agendamentos,setAgendamentos] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {

        const user = AuthService.getCurrentUser();
        // check user data
        if(!user){
            setTimeout(() =>{
                navigate("/");
                window.location.reload();
            },1000)
        }
        // redirect if user is not authenticated
        axios.get('http://localhost:5092/api/Home/Admin',{headers: { Authorization: 'Bearer '+ user.token }})
        .then((res) => {}).catch(e=>{alert('Você não tem permissao para estar aqui!');navigate('/Redirect')})

        // list of clients
        let data = [];
        axios.get(`http://localhost:5092/api/Agendamento`)
        .then((res) =>{res.data.forEach(e => {
            data.push({id:e.id,email:e.email,data:e.data,horario:e.horario,pet:e.pet,especie:e.especie,aprovado:e.aprovado})
        }); setAgendamentos(data)})

    }, []);

    const cancelarAtendimento = (id) => {
        const confirmar = window.confirm('Deseja mesmo cancelar seu atendimento?');

        confirmar && axios.delete(`http://localhost:5092/api/Agendamento/${id}`)
    };

    const aceitarAtendimento = (e) => {
        const confirmar = window.confirm(`Deseja mesmo aprovar o atendimento de ${e.email}?`);
        // if confirmar like true update data of accept
        confirmar && axios.put(`http://localhost:5092/api/Agendamento/${e.id}`,{
        id:e.id,
        email:e.email,
        data:e.data,
        horario:e.horario,
        pet:e.pet,
        especie:e.especie,
        aprovado:true
    })
    };

    return(
        <div className="adminViewContainer">
            <h1 className="adminTitle">Agendamentos do PetShop</h1>
            <div className="adminContainer">
                <form>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Nome do Pet</th>
                        <th>Especie</th>
                        <th>Contato</th>
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
                                <td>{e.emaul}</td>
                                <button onClick={()=>aceitarAtendimento(e)}>Aceitar</button>
                                <button onClick={()=>cancelarAtendimento(e.id)}>Cancelar</button>
                            </tr>
                    )}
                </tbody>
                </form>
            </div>
        </div>
    )

};

export default AdminView;