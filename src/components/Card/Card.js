import React from 'react';
import './Card.scss'

function Card(props){
    return <div id="card" class="card">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h4>{props.name}</h4>
            <p class="card-text">{props.blurb}</p>
        </div>
    </div>;
}

export default Card;