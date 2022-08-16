import React from 'react';
import './../css/tela-sobre.css';
import NavBar from '../components/navBar';

import LucasPhoto from '../imagens/fotos/lucas.jpeg'
import JayPhoto from '../imagens/fotos/jay.jpeg'
import FernandaPhoto from '../imagens/fotos/fernanda.jpeg'
import LuanaPhoto from '../imagens/fotos/luana.jpeg'

import GitHubIcon from '../imagens/icons/github.svg'
import LinkedInIcon from '../imagens/icons/linkedin.svg'



const About = () => {
    return (
        <div>
            <NavBar />
            
            <main className='main-section'>
                <div className='about-section'>

                    <div className='card-section'>

                        <img className='photo' src={LucasPhoto}></img>
                        <h2 className='name'>Lucas Souza</h2>
                        <div className='links'>
                            <a href='https://github.com/lucazle'><img className='icon' src={GitHubIcon}></img></a>
                            <a href='https://www.linkedin.com/in/lucas-souza-260b99158/'><img className='icon' src={LinkedInIcon}></img></a>
                        </div>

                    </div>

                    <div className='card-section'>

                        <img className='photo' src={JayPhoto}></img>
                        <h2 className='name'>Jay Luna</h2>
                        <div className='links'>
                            <a href='https://github.com/JayLuna22'><img className='icon' src={GitHubIcon}></img></a>
                            <a href='https://www.linkedin.com/in/jay-luna-silva-a8b78820b/'><img className='icon' src={LinkedInIcon}></img></a>
                        </div>

                    </div>

                    <div className='card-section'>

                        <img className='photo' src={FernandaPhoto}></img>
                        <h2 className='name'>Fernanda Martins</h2>
                        <div className='links'>
                            <a href='https://github.com/FernandaMartinss'><img className='icon' src={GitHubIcon}></img></a>
                            <a href='https://www.linkedin.com/in/fernanda-martins-407744209'><img className='icon' src={LinkedInIcon}></img></a>
                        </div>

                    </div>

                    <div className='card-section'>

                        <img className='photo' src={LuanaPhoto}></img>
                        <h2 className='name'>Luana Braga</h2>
                        <div className='links'>
                            <a href='https://github.com/LuanaBraga01'><img className='icon' src={GitHubIcon}></img></a>
                            <a href='https://www.linkedin.com/in/luana-braga-/'><img className='icon' src={LinkedInIcon}></img></a>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}


export default About;
