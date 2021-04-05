import {API_KEY} from "./settings"

export default function getDetailGif({ id }) {

  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const { images, title, id } = data;
      const { url } = images.downsized_medium;
        return { title, id, url};
      })
    }
    
