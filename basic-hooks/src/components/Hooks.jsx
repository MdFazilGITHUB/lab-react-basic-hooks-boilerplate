import React, { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../App";

function Hooks() {
  const themeChange = useContext(ToggleContext);
  console.log("dark: ", themeChange);
  const themeStyles = {
    backgroundColor: `${themeChange.dark ? "black" : "white"}`,
    height:"fit-Content",
    padding:"40px",
    borderRadius:"40px",
    color: `${themeChange.dark ? "white" : "black"}`,
  };
  const [showContent, setShowContent] = useState(false);
  const [likes,setLikes] = useState(0)

  useEffect(()=>{
    alert(`Content button clicked`)
  },[showContent])

  return (
    <div style={themeStyles}>
      <h4 style={{fontSize:"20px"}}>
        {showContent
          ? "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."
          : "Click on button to show content"}
      </h4>
      <button
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        C O N T E N T
      </button>

      <h1>{likes}</h1>
      <button onClick={()=>{
        setLikes(likes+1)
      }}>L I K E</button>
      <button onClick={()=>{
        setLikes(likes-1)
      }}>D I S L I K E</button>
    </div>
  );
}

export default Hooks;
