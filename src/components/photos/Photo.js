import React from "react";

function Photo(props) {    
  const photo = props.location.state
  return (
    <div>
      <img src={photo.url} alt="green" />
    </div>
  );
}

export default Photo;
