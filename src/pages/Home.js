import React, {useCallback} from "react";
import ListOfGifs from "../components/ListOfGifs";
import LazyTrending from "../components/LazyTrending";
import useGifs from "../hooks/useGifs";
import SearchForm from "../components/SearchForm";
import { useLocation } from "wouter";
import useTitle from "../hooks/useTitle";


export default function Home() {
  const [, pushLocation] = useLocation();
  const { gifs } = useGifs();

  useTitle({title:"Home"})
  const handleSubmit= 
  useCallback( ({keyword})=>{
    pushLocation(`/search/${keyword}`);

  }, [pushLocation])
  return (
    <>
     <SearchForm onSubmit={handleSubmit}></SearchForm>
      <LazyTrending/>
      <h3>Popular Gifs</h3>
      <ListOfGifs gifs={gifs}></ListOfGifs>
    </>
  );
}
