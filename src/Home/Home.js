import React from 'react';
import './Home.scss';
import Navbar from '../components/Navbar/Navbar';
import logo from '../assets/img/logo.png';

function Home(){
    return <div id="home">
        <div className="row">
            <div className="col-12 front">
                <Navbar /> 
                <div className="text-center">
                    <img src={logo}></img>
                </div>
            </div>
        </div>
    </div>;
}

export default Home;