import React from "react";
import "../css/tela-colaboradores.css"
import ame from "../imagens/ame.png"
import roc from "../imagens/roc.png"
import sub from "../imagens/sub.png"
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Colaboradores = () => {
    return (

        <div>
            <NavBar/>
            <h1 id="h1">Nossos apoiadores</h1>

            <div id="divApoiadores">

                <section className="ame">
                    <button className="button-colaborador">
                        <img className="icon-colaborador" alt="img-ameron"
                            src={ame}/>
                        <p className="nome-empresa">
                            <b>Ameron</b>
                        </p>
                        <p className="pontos">100 pontos
                        </p>
                        <p className="brinde">Você ganha 1 brinde</p>
                    </button>
                </section>

                <section className="roc">
                    <button className="button-colaborador">
                        <img className="icon-colaborador" alt="img-rochalon"
                            src={roc}/>
                        <p className="nome-empresa">
                            <b>Rochalon</b>
                        </p>
                        <p className="pontos">200 pontos</p>
                        <p className="brinde">Você ganha 2 brindes</p>
                    </button>
                </section>

                <section className="sub">
                    <button className="button-colaborador">
                        <img className="icon-colaborador" alt="img-sublime"
                            src={sub}/>
                        <p className="nome-empresa">
                            <b>Sublime</b>
                        </p>
                        <p className="pontos">300 pontos</p>
                        <p className="brinde">Você ganha 3 brindes</p>
                    </button>
                </section>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Colaboradores;
