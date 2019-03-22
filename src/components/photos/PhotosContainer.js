import React, { Component } from 'react';
import PhotosList from './PhotosList'
import * as api from '../../api/jsonplaceholder'

class PhotosContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.fetchPhotos()
  }

 async fetchPhotos() {
   const photos = await api.fetchPhotos()
    this.setState({
      photos
    })
    
  }
    render() {
      const {photos} = this.state
      return (
        <PhotosList photos={photos}/>
      )
    }
}

export default PhotosContainer;