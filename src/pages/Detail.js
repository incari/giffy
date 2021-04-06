import React from "react";
import Gif from "../components/Gif";
import useGifDetail from "../hooks/useGifDetail";
import useTitle from "../hooks/useTitle";

export default function Detail({ params }) {
  const { detailGif } = useGifDetail({ id: params.id });
  const  title  = detailGif ? detailGif.title : "Loading...";
  console.log(detailGif ,title)


  useTitle({title: title });
 if(!detailGif) return null
  return<> 
  <h3>{detailGif.title}</h3>
  <Gif {...detailGif}></Gif>
  </> 
}
