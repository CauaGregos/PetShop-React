
import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import axios from "axios";

import { useNavigate } from "react-router";
import { MdOutlineCancel,MdCheckCircleOutline } from "react-icons/md";
import Header from "../../components/Header/header";
const Adminlist = () => {

    const [adminList,setAdminList] = useState([{}]);
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
        axios.get(`http://localhost:5092/api/Perfil/AdminList`)
        .then((res) =>{res.data.forEach(e => {
            data.push({id:e.id,nome:e.nome,email:e.email,role:e.role})
        }); setAdminList(data)})

    }, [adminList]);

    const cancelarAtendimento = (email,perm) => {
        const confirmar = window.confirm('Deseja mesmo exluir esse admin?');
        confirmar && adicionarAdmin(email,perm)

    };

    const adicionarAdmin = (em,perm) => {
        const email = !em ? window.prompt('Digite o email: ') : em;
        const permission = perm === 'Cliente' ? perm : perm = 'Admin' 
        axios.get(`http://localhost:5092/api/Perfil/getPerfilByEmail?PerfilEmail=${email}`)
        .then((resp)=>{
            const e = resp.data[0];
           
            axios.put(`http://localhost:5092/api/Perfil/${e.id}`,{
                id: 0,
                nome: e.nome,
                email: e.email,
                senha: e.senha,
                role:permission
            }).then(setAdminList([{}]))
        })
    };

    return(
        <div className="AdminViewContainer">
           <Header data={['Admin','Adminlist']}/>
            <div className="formContainerFather">
            <h1 className="AdminTitle">Lista de Administradores do PetShop</h1>
                <table className="formContainer">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Permissão</th>
                    </tr>
                </thead>
                <tbody>
                    {adminList.map(
                        (e) =>
                            <tr key={e.id}>
                                <td>{e.nome}</td>
                                <td>{e.email}</td>
                                <td>{e.role}</td>
                                <button className="formButtonAdminCancel" onClick={()=>cancelarAtendimento(e.email,'Cliente')}><MdOutlineCancel size={17} color="#FFF"/></button>
                            </tr>
                    )}
                </tbody>
                <tfoot>
                <button className="formButtonAgend" onClick={()=>adicionarAdmin()}>Adicionar</button>
                </tfoot>
                </table>
            </div>
        </div>
    )

};

export default Adminlist;