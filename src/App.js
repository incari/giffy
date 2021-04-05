import React from "react";
import "./App.css";
import { Route, Link } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import {GifsContextProvider} from "./context/GifsContext"


export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: "test",
        probando: true
    }
    }>
      <div className="App">
        <Link to="/"> HOME</Link>
        <section className="App-content">
          <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
