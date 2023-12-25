import React, { memo } from "react";
import "./container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import Card from "./card";

function Container() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [memories, setMemories] = useState([]);
  const[title ,setTitle] = useState("");
  const[detail, setDetail] = useState("");

  const handleImageClick = () => {

    //   inputRef.current.click();
    setMemories([
      ...memories,
      {
        title: "",
        detail: "",
        images: "",
      },
    ]);
  };
  const saveDetails = (index) =>{
   setMemories([
    ...memories,{
        title:title,
        detail:detail
    }
   ])
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };
  return (
    <>
      <div className="dash-container">
        <div onClick={handleImageClick} className="add-memories">
        
            <FontAwesomeIcon icon={faPlusSquare} color="black" size="2xl" />
  
          <input
            type="file"
            ref={inputRef}
            // onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
     </div>
          {memories.map((memory, index) => {
            console.log(memory);
            console.log(index);
            return <Card memory={memory} saveDetails={saveDetails} title={title} detail={detail} setTitle={setTitle} setDetails={setDetail} index={index}/>;
          })}
        </div>
    </>
  );
}
export default Container;
