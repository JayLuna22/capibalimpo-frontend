import React from "react";
import './../css/navBar.css';
import icon from '../imagens/icon-perfil.png';

 const NavBar = () =>{
    
    return (
        <div>
            <nav class="navigation">
            <a href="/home" class="logo">CapibaLimpo</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/home">Home</a></li>
                <li class="nav-item"><a href="/agendamento">Agendamento</a></li>
                <li class="nav-item"><a href="/colaboradores">Apoiadores</a></li>
                <li class="nav-item"><a href="">Sobre nós</a></li>
                <li class="nav-icon">


                            <a href="/perfil">
                                <img class="icon-p" src={icon} />
                            </a>
                    </li>
                <li className="nav-item-nome"><a href="#">Olá, Jay!</a>
                </li>
            </ul>
            </nav>
        </div>
    )
 
 }
export default NavBar;