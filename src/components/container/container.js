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
  console.table(memories);

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
  const saveDetails = (index,title,detail,image) =>{
  let tempMemories = [...memories]
    tempMemories[index].title = title;
    tempMemories[index].detail = detail;
    tempMemories[index].images = image;
  
    setMemories(tempMemories)

  }
  const deleteMemory = (index)=>{
    console.log(index);
    const tempMemories = [...memories];
    tempMemories.splice(index,1)
    setMemories(tempMemories)
  }
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   setImage(event.target.files[0]);
  // };
  return (
    <>
      <div className="dash-container">
        <div onClick={handleImageClick} className="add-memories">
        
            <FontAwesomeIcon className =" plus-icon"icon={faPlusSquare} color="black" size="2xl" />
         
          <input
            type="file"
            ref={inputRef}
            // onChange={handleImageChange}
            style={{ display: "none" }}
          ></input>
          <div className="memory-name"><h1>Add Memory!</h1>
          </div>
     </div>
      
          {memories.map((memory, index) => {
            return <Card key={`lksdjf-${index}`} deleteMemory={deleteMemory} memory={memory} saveDetails={saveDetails} index={index} />;
          })}
        </div>
    </>
  );
}
export default Container;
