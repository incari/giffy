import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import "./ListOfGifs.css"

export default function ListOfGifs({ gifs }) {

  
  return (
    <div  className='ListOfGifs'>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url}></Gif>
      ))}
    </div>
  );
}