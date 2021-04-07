import React from "react";
import { Route } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";

import { GifsContextProvider } from "./context/GifsContext";
import { UserContextProvider } from "./context/UserContext";
import "./App.css";

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header></Header>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/login" component={Login} />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}
