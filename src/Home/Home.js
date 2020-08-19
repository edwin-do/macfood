import React from 'react';
import './Home.scss';
import Navbar from '../components/Navbar/Navbar';

function Home(){
    return <div id="home">
        <div className="row">
            <div className="col-12 front">
                <Navbar /> 
                <div className="text-center">
                    <h1>McMaster Food Allergy Club</h1>
                </div>
            </div>
        </div>
        <div className="description row">
            <h3> Something</h3>
        </div>
    </div>;
}

export default Home;