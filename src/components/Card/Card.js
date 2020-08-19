import React from 'react';
import './Card.scss'

function Card(props){
    return <div id="card" class="card">
        <img class="card-img-top" src={props.img} alt=""></img>
        <div class="card-body">
            <h4>{props.name}</h4>
            <p class="card-text">{props.blurb}</p>
        </div>
    </div>;
}

export default Card;