import React, { useState } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

function Card({ memory, saveDetails, index, deleteMemory }) {
  const [toggleDetails, setToggleDetails] = useState(false);
  const [title, setTitle] = useState();
  const [detail, setDetails] = useState();
  const [showMemoryDetails, setShowMemoryDetails] = useState();

  return (
    <div className="card-wrapper">
      <div className="action-wrapper">
        <div
          onClick={() => {
            setShowMemoryDetails(false);
          }}
          className="edit"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>

        <div onClick={()=>{
deleteMemory(index)
        }} className="delete">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      </div>
      <div className="card-header">
        <img
          src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
          alt="images"
        ></img>
      </div>
      <div className="card-body">
        {showMemoryDetails ? (
          <div>
            <h1>{title}</h1>
            <p>{detail}</p>
          </div>
        ) : toggleDetails ? (
          <div className="details-wrapper ">
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
              placeholder="heading"
            ></input>
            <textarea
              value={detail}
              onChange={(event) => {
                setDetails(event.target.value);
              }}
              className="text-details"
              placeholder="details"
              role={100}
            ></textarea>
            <button
              className="save-button"
              onClick={() => {
                saveDetails(index, title, detail);
                setShowMemoryDetails(true);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="add-detail"
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
