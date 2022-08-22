import React from 'react';
import voluntario from '../imagens/voluntario.png';
import apoiador from '../imagens/apoiador.png';
import adm from '../imagens/adm.png';
import '../css/tela-inicial.css'
import Footer from '../components/footer';

const TelaInicial = () => {
    return (
        <div>
            <section id="container">
                <section class="box">
                    <img class="icon-inicial" 
                        src={voluntario}/><br/>
                    <button class="button">
                        <a href="/login">
                            <h2>Voluntário</h2>
                        </a>
                    </button>
                </section>
                <section class="box">
                    <img class="icon-inicial"
                        src={apoiador}/><br/>
                    <button class="button">
                        <a href="/apoio">
                            <h2>Apoiador</h2>
                        </a>
                    </button>
                </section>
                <section class="box">
                    <img class="icon-inicial"
                        src={adm}/><br/>
                    <button class="button">
                        <a href="/loginAdm">
                            <h2>Administrador</h2>
                        </a>
                    </button>
                </section>
            </section>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}
export default TelaInicial;
