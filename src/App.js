import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./Components/Searchpage/SearchPage";


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
