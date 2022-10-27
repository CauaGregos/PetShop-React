
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScheduleView = () => {
    const navigate = useNavigate();
    const [agendamentos,setAgendamentos] = useState([{}]);
    const [isAccept,setIsAccept] = useState(false);
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

    


         // list of clients
         let data = [];
         axios.get(`http://localhost:5092/api/Agendamento/${user.user.email}`)
         .then((res) =>{res.data.forEach(e => {
             data.push({id:e.id,email:e.email,data:e.data,horario:e.horario,pet:e.pet,especie:e.especie,aprovado:e.aprovado})
         }); setAgendamentos(data)})
        
    }, [agendamentos]);

    const cancelarAtendimento = (id) => {
        const confirmar = window.confirm('Deseja mesmo cancelar seu atendimento?');

        confirmar && axios.delete(`http://localhost:5092/api/Agendamento/${id}`)
    };

    return(
        <div className="scheduleViewContainer">
            
            <div className="formContainerFather">
            <h1 className="scheduleTitle">Seus Agendamentos</h1>
                <table className="formContainer">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horario</th>
                        <th>Nome do pet</th>
                        <th>Especie</th>
                    </tr>
                </thead>
                <tbody className="formBodySchedule">
                    {agendamentos.map(
                        (e) =>
                            <tr style={e.aprovado? {backgroundColor:'#90f18786'}: {}} key={e.id}>
                                <td>{e.data}</td>
                                <td>{e.horario}</td>
                                <td>{e.pet}</td>
                                <td>{e.especie}</td>
                                {!e.aprovado && <button className="formButtonSchedule"  onClick={()=>cancelarAtendimento(e.id)}>Cancelar</button>}
                                
                            </tr>
                    )}
                </tbody>
                <tfoot>
                <button className="formButtonAgend">Agendar</button>
                </tfoot>
                </table>
               
            </div>
        </div>
    )

};

export default ScheduleView;