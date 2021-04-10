import React, { useEffect, useState} from "react";
import getTrendings from "../services/getTrendings";
import Category from "./Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendings().then(setTrends);
  }, []);
  return <Category name="Trendings" options={trends} />;
}

