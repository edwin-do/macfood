import React from 'react';
import './Team.scss'
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import Jamie from '../assets/img/jamie.JPG';

function Team(){
    return <div id="team">
        <div className="row">
            <div className="col-12 front">
                <Navbar />
                <div className="container">
                    <div className="text-center">
                        <h1>Meet Our Team!</h1>
                    </div>
                </div> 
            </div>
        </div>
        <div className="container">
            <div className="row">
                    <div className="col-6">
                        <Card name="test" blurb="random" img={Jamie}/>
                        <Card name="test" blurb="random"/>
                        <Card name="test" blurb="random"/>
                    </div>
                    <div className="col-6">
                        <Card name="test" blurb="random"/>
                        <Card name="test" blurb="random"/>
                        <Card name="test" blurb="random"/>
                    </div>
            </div>
        </div>
    </div>;
}

export default Team;