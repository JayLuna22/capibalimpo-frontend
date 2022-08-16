import React from 'react';
import './../css/tela-perfil.css';
import logoPerfil from '../imagens/voluntario.png';

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
