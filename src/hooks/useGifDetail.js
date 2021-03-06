import { useContext, useEffect, useState } from 'react'
import getDetailGif from '../services/getDetailGif';
import GifsContext from "../context/GifsContext";

export default function useGifDetail({id}) {
    const { gifs } = useContext(GifsContext);
    const gif = gifs.find((gif) => gif.id === id)
    const [detailGif, setDetailGif] = useState(gif)

   useEffect(function(){
    if(!detailGif)
    getDetailGif({id})
    .then((gif) => {
      setDetailGif(gif);
    });
  }, [detailGif, id]);

 return {detailGif}
}
