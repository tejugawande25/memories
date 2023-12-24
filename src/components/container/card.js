import React from "react";
import "./card.css"

function Card(props) {
  return (
    <>
        <div class="card">
        <img src ={props.Image} alt=""/>
          <div class="container">
            <h4>
              <b>Jane Doe</b>
            </h4>
            <p>Interior Designer</p>
          </div>
        </div>
    </>
  );
}

export default Card;
