import React from 'react';
import './Navbar.scss'

function Navbar(){
    return <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/our-team">Our Team</a>
                        <a className="nav-item nav-link" href="/">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}

export default Navbar;