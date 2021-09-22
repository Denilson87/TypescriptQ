import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import logo from '../../assets/logo.svg';
import './style.css'

const Home=()=>{
    return (
        <div id="page-home">
            <div>
                <img src={logo} alt="logo"/>
                <h2>Bem vindos ao jogo, neste jogo poderemos apreender tudo sobre a actualidades e factos fascninantes</h2>
            </div>
            <Link to='/quiz'>
                <Button text="Começar"/>
            </Link>
           
        </div>
    )
}

export default Home;
