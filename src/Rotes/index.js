import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CrudAluno from './CrudAluno/CrudAluno';
import CrudCurso from './CrudCurso/CrudCurso';
import Carometro from './Carometro/index';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<CrudAluno/>} component={CrudAluno} />
                <Route path='/aluno' element={<CrudAluno/>} component={CrudAluno}/>            
                <Route path='/curso' element={<CrudCurso/>} component={CrudCurso}/>       
                <Route path='/carometro' element={<Carometro/>} component={Carometro}/>            
            </Routes>
        </BrowserRouter>
        
    )
}