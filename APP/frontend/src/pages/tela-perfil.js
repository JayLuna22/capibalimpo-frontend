import React from 'react';
import './../css/tela-perfil.css';
import logoPerfil from '../imagens/voluntario.png';
import {Route} from 'react-router-dom';
import { text } from 'express';

const TelaLogin = () => {

    return (
        <div className='fundo-perfil'>
            <div className='container-perfil'>

                <div className='topo-perfil'>
                    <div className='card-foto'>
                        <img className="foto-perfil"
                            src={logoPerfil}
                            alt="foto-perfil"/>
                    </div>

                    <div className='usuario-perfil'>
                        <h2>
                            Jay Luna da Silva</h2>
                        <h4>Sua pontuação atual é:
                            <br/>
                            300 pontos</h4>
                    </div>
                </div>

                <div className='info-perfil'>
                    <label className='title-info' >
                       <b>Suas informações</b>
                    </label>

                    <input type='text' className='info-perfil'  readOnly placeholder='Jay Luna da Silva'/>
                    <input type='text' className='info-perfil'  placeholder='jayluna@gmail.com'/>
                    <input type='text' className='info-perfil'  placeholder='000.000.000-00'/>
                    <input type='text' className='info-perfil'  placeholder='81 98514-9868'/> 
                    <input type='date' className='info-perfil'  placeholder='12/03/1998'/>
                </div>

                <div className='botao-perfil'>
                    <button type='button' className='botao-perfil'>
                        <p>
                            Alterar dados cadastrais</p>
                        {/* criar tela de alterar dados, repetir a de cadastro */} </button>
                    <button type="button" className="botao-perfil">
                        <a href='/home'>
                            <p>Sair</p>
                        </a>
                    </button>

                </div>


            </div>
        </div>

    )
}
export default TelaLogin;
