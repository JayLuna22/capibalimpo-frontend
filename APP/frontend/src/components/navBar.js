import React from "react";
import './../css/navBar.css';
import icon from '../imagens/icon-perfil.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

 const NavBar = () =>{
    
    return (
        <div>
            <nav class="navigation">
            <a href="#" class="logo">CapibaLimpo</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Agendar uma data</a></li>
                <li class="nav-item"><a href="#">Parceiros</a></li>
                <li class="nav-item"><a href="/sobre">Sobre nós</a></li>
               
            </ul>
                            <a className="nav-icon" href="#">
                                <img class="icon-p" src={icon} />
                            </a>
            </nav>
        </div>
    )
 
 }
export default NavBar;