import React from 'react';
import './Card.scss'

function Card(props){
    return <div id="card" className="card">
        <img className="card-img-top" src={props.img} alt=""></img>
        <div className="card-body">
            <h4>{props.name}</h4>
            <p className="card-text">{props.blurb}</p>
        </div>
    </div>;
}

export default Card;