import React, { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";
import useNearScreen from "../hooks/useNearSceen";
import loader from "../static/loader_coffee.gif";
import useTitle from "../hooks/useTitle";
import { isElement } from "react-dom/test-utils";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  console.log(isNearScreen, "search");
  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  useTitle({ title });
  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500, true),
    []
  );

  useEffect(() => {
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
