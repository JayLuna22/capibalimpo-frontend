import React from "react";
import NavBar from "../components/navBar";
import '../css/tela-agendamento.css'
import Footer from "../components/footer";


const TelaAgendamento = () => {
    return (
        <div>
            <NavBar/>
            <div className="table">
                <table>
                    <tr>
                        <th></th>
                        <th>Título</th>
                        <th>Data e Hora</th>
                        <th>Local</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Coleta Coletiva</td>
                        <td>20/08/2022 08:00</td>
                        <td>Jardim do Baobá</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Coleta Ameron</td>
                        <td>11/09/2022 10:00</td>
                        <td>Palafitas do Pina</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>Coleta Sublime</td>
                        <td>03/09/2022 09:00</td>
                        <td>Capibar</td>
                    </tr>
                </table>
                <div>
                    <button className="button-1">
                        <a href="#" className="home-btn">Agendar</a>
                    </button>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default TelaAgendamento;
