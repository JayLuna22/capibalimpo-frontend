import React from 'react';
import './../css/tela-perfil.css';
import logoPerfil from '../imagens/voluntario.png';
import Footer from '../components/footer';

const TelaPerfil = () => {

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
                    <label className='title-info'>
                        <b>Suas informações</b>
                    </label>
                    <div className="user-box">
                        <input readonly type="text" id="info" className="input-texto" value="Jay Luna"/>
                        <input readonly type="text" id="info" className="input-texto" value="000.000.000-00"/>
                        <input readonly type="text" id="info" className="input-texto" value="jayluna@gmail.com"/>
                        <input readonly type="text" id="info" className="input-texto" value="(81) 99637-6231"/>
                        <input readonly type="text" id="info" className="input-texto" value="06/09/1994"/>
                    </div>
                </div>
                <div className='botoes'>
                    <button type='button' className='botao-perfil'>
                        <a href='#'>
                            <p>Alterar dados cadastrais</p>
                        </a>
                    </button>
                    <button type="button" className="botao-perfil">
                        <a href='/'>
                            <p>Sair</p>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )

}
export default TelaPerfil;
