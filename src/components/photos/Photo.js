import React from "react";

function Photo(props) {

  const {photo} = props
  return (
    <div>
      <image src={photo.url} />
    </div>
  );
}

export default Photo;
