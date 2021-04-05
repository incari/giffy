import React, { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";
import useNearScreen from "../hooks/useNearSceen";
import loader from "../static/loader_coffee.gif";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  });

  const debounceHandleNextPage =  useCallback(debounce(
    () => setPage(prevPage => prevPage+1),500, true),
    []
  )
  
  
  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);


  return (
    <>
      {loading ? (
        <img src={loader} alt="loader" />
      ) : (
        <>
          <ListOfGifs gifs={gifs}></ListOfGifs>
          <div ref={externalRef} id="visor"></div>
        </>
      )}
    </>
  );
}
