import React, { Suspense, lazy, useRef } from "react";
import useNearScreen from "../hooks/useNearSceen";

const TrendingSearches = lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({externalRef});

  return (
    <>
      <div id="trending-ref" ref={externalRef}></div>
      <Suspense fallback={"loading..."}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </>
  );
}
