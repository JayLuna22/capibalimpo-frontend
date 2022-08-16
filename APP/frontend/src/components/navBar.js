import React from "react";
import './../css/navBar.css';
import icon from '../imagens/icon-perfil.png';

 const NavBar = () =>{
    
    return (
        <div>
            <nav class="navigation">
            <a href="" class="logo">CapibaLimpo</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="">Home</a></li>
                <li class="nav-item"><a href="">Agendar uma data</a></li>
                <li class="nav-item"><a href="">Parceiros</a></li>
                <li class="nav-item"><a href="">Sobre nós</a></li>
                <li class="nav-icon">
                            <a href="">
                                <img class="icon-p" src={icon} />
                            </a>
                    </li>
            </ul>
            </nav>
        </div>
    )
 
 }
export default NavBar;