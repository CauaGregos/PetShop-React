
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
        // checar se o user existe
        if(!user){
            setTimeout(() =>{
                navigate("/login");
                window.location.reload();
            },1000)
        }
        // redireciona caso o user nao tenha a permissao
        axios.get('http://localhost:5092/api/Home/Admin',{headers: { Authorization: 'Bearer '+ user.token }})
        .then((res) => {}).catch(e=>{alert('Você não tem permissao para estar aqui!');navigate('/Redirect')})

        // Lista de clientes
        let data = [];
        axios.get(`http://localhost:5092/api/Agendamento`)
        .then((res) =>{res.data.forEach(e => {
           
            data.push({id:e.id,email:e.email,data:e.data,horario:e.horario,pet:e.pet,especie:e.especie,servico:e.servico,aprovado:e.aprovado})
        }); setAgendamentos(data)})

    }, [agendamentos]);

    const cancelarAtendimento = (id) => {
        const confirmar = window.confirm('Deseja mesmo cancelar seu atendimento?');

        confirmar && axios.delete(`http://localhost:5092/api/Agendamento/${id}`)
    };

    const aceitarAtendimento = (e) => {
        const confirmar = window.confirm(`Deseja mesmo aprovar o atendimento de ${e.email}?`);
        
        confirmar && axios.put(`http://localhost:5092/api/Agendamento/${e.id}`,{
        id:e.id,
        email:e.email,
        data:e.data,
        horario:e.horario,
        pet:e.pet,
        servico:e.servico,
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
                <table className="formContainer2">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Nome do Pet</th>
                        <th>Especie</th>
                        <th>Serviços</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentos.map(
                        (e) =>
                            <tr key={e.id} style={e.aprovado ? {backgroundColor:'#90f18786'} : {backgroundColor:'#F3F3F3'}}>
                                <td>{e.data}</td>
                                <td>{e.horario}</td>
                                <td>{e.pet}</td>
                                <td>{e.especie}</td>
                                <td>{e.servico}</td>
                                <td>{e.email}</td>

                                {!e.aprovado && <button className="formButtonAdminAccept" onClick={()=>aceitarAtendimento(e)}><MdCheckCircleOutline size={17} color="#FFF"/></button>}
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