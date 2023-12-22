import React from "react";
import "./container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faPlusSquare} from "@fortawesome/free-regular-svg-icons"

function Container(){
    return(
        <>
        <div className="dash-container">
            <div className="memo">
            <div className="add-memories">
               <div>
                <FontAwesomeIcon icon={faPlusSquare} color="black"/>
               </div>
            </div>
            <div className="memo-text">
                <h1>Add Memory!</h1>
            </div>
            </div>
        <div className="card-container">
            <div className="card">
                <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-p-3278215.jpg&fm=jpg"></img>
            <div className="card-text">
            <h1>Travel</h1>
            <p>Create memmories that lasts lifetime.
                A mind that is streched by a <strong> new experinece </strong>
                can never go back to it's old dimensions.
                Wherever you go, go with your heart.
            </p>
            </div>
            </div>
            </div>
        </div>   

        </>
    )
}
export default Container;