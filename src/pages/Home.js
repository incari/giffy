import React, {useState } from "react";
import {  useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";
import useGifs from "../hooks/useGifs";


export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();


  const handleSubmit = (event) => {
    event.preventDefault();
    //ir a otra ruta
    pushLocation(`/search/${keyword}`);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          name=""
          id=""
          onChange={handleChange}
        />
      </form>
      <h3>Popular Gifs</h3>
      <ListOfGifs gifs={gifs}></ListOfGifs>
      <LazyTrending/>
    </>
  );
}
