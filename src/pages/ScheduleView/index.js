
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";
import './style.css'
import { useNavigate } from "react-router";

const ScheduleView = () => {

    const [agendamentos,setAgendamentos] = useState([{}]);

    useEffect(() => {
        
    }, []);

    return(
        <div className="scheduleViewContainer">
            <h1 className="scheduleTitle">Seus Agendamentos</h1>
            <div className="formContainer">
                <form>
                <tbody>
                    {/* {lista.map(
                        (aluno) =>
                            <tr key={aluno.id}>
                                <td>{aluno.ra}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.codCurso}</td>
                            </tr>
                    )} */}
                </tbody>
                </form>
            </div>
        </div>
    )

};

export default ScheduleView;