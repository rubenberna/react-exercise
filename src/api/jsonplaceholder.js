export const fetchPhotos = () => 
  fetch("http://jsonplaceholder.typicode.com/photos?_limit=30",)
    .then(res => res.json())
    .then(json =>  json )
    .catch(err => console.log(err))
