import React from "react";
import { Link } from "react-router-dom";


function PhotosList(props) {

  const {photos} = props

  const imageStyle = {
    margin: '15px'
  }

  return (
    photos.map(photo => 
        <Link
          key={photo.id}
          to={{
            pathname: `/photo/${photo.id}`,
            state: photo
          }} >
          <img src={photo.url} alt="lknl"  style={imageStyle}/>
        </Link>      
    )
  )
}

export default PhotosList;