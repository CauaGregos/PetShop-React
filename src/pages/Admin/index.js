
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";
import { MdOutlineCancel,MdCheckCircleOutline } from "react-icons/md";
import Header from "../../components/Header/header";
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
            if(e.aprovado==false)
            data.push({id:e.id,email:e.email,data:e.data,horario:e.horario,pet:e.pet,especie:e.especie,aprovado:e.aprovado})
        }); setAgendamentos(data)})

    }, [agendamentos]);

    const cancelarAtendimento = (id) => {
        const confirmar = window.confirm('Deseja mesmo cancelar seu atendimento?');

        confirmar && axios.delete(`http://localhost:5092/api/Agendamento/${id}`)
    };

    const aceitarAtendimento = (e) => {
        const confirmar = window.confirm(`Deseja mesmo aprovar o atendimento de ${e.email}?`);
        // if confirmar like true update data
        confirmar && axios.put(`http://localhost:5092/api/Agendamento/${e.id}`,{
        id:e.id,
        email:e.email,
        data:e.data,
        horario:e.horario,
        pet:e.pet,
        especie:e.especie,
        aprovado:true
    })
    setAgendamentos([{}])
    };

    return(
        <div className="AdminViewContainer">
           <Header data={["Admin","AdminList"]}/>
            <div className="formContainerFather">
            <h1 className="AdminTitle">Agendamentos do PetShop</h1>
                <table className="formContainer">
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
                                <td>{e.email}</td>
                                <button className="formButtonAdminAccept" onClick={()=>aceitarAtendimento(e)}><MdCheckCircleOutline size={17} color="#FFF"/></button>
                                <button className="formButtonAdminCancel" onClick={()=>cancelarAtendimento(e.id)}><MdOutlineCancel size={17} color="#FFF"/></button>
                            </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    )

};

export default AdminView;