import React from "react";
import '../css/tela-apoiador.css';
import TelaApoiador from '../imagens/icon-login.png'


const Apoiador = () => {
    return (
        <div>
            <div>
                <img className='logo-cadastro'
                    src={TelaApoiador}
                    alt="logoProjeto"/>
            </div>
            <div className="container">
                <div className='card-cadastro'>
                  <div className='box-cadastro'>
                    <p className='cadastro-title' >Preencha o formulário</p>
                    
                    <form id="register-form">
                        <div className="user-box">
                            <input className="input-texto" type="text" placeholder="Nome/Razão Social" name="nome" id="nome"/>
                            <input className="input-texto" type="text" placeholder="Digite o CNPJ ex: 00.000.000/0001-00" name="cnpj" id="cnpj" maxLength={18}/>
                            <input className="input-texto" type="email" placeholder="E-mail" name="email" id="email"/>
                            <textarea className="input-msg" placeholder="Conte-nos como seu apoio pode nos ajudar!" name="mensagem" id="mensagem" maxLength={240}/>
                              
                            
                        </div>
                        <div className="btn-cadastro">
                            <button type="submit" className="botao-submit">
                                <p>Confirmar</p>
                            </button>
                            <button type="reset" className="botao-submit">
                                <p>Cancelar</p>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apoiador;