import React from "react";
import Gif from "../components/Gif";
import useGifDetail from "../hooks/useGifDetail";

export default function Detail({ params }) {
  const { id } = params;
  console.log("detail",params)
  const gif = useGifDetail(id);
  return <Gif {...gif}></Gif>;
}
