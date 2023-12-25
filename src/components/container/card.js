import React, { useState } from "react";
import "./card.css";

function Card({ memory,saveDetails,title,detail,setTitle,setDetails,index}) {
  const [toggleDetails, setToggleDetails] = useState(false);

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img
          src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
          alt="images"
        ></img>
      </div>
      <div className="card-body">
        {toggleDetails ? (
          <div className="details-wrapper ">
            <input value={title} onChange={(event)=>{setTitle(event.target.value)}} type="text" placeholder="heading"></input>
            <textarea value={detail} onChange={(event) =>{setDetails(event.target.value)}} className="text-details" placeholder="details" role={100}></textarea>
            <button className="save-button" onClick={()=>{
              saveDetails(index);
            }}>Save</button>
          </div>
        ) : (
          <button className="add-detail"
            onClick={() => {
              setToggleDetails(true);
            }}
          >
            Add Details
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
