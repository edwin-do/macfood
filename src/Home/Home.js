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
                    <img src={logo} alt=""></img>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="text-center">
                    <h1>Welcome to Our page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Home;