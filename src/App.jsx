import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Categoria from "./paginas/Categoria";
import Rota404 from "./paginas/Pagina404";
import Post from "./paginas/Post";

import Cabecalho from "./components/Cabecalho";

import "./assets/css/base/base.css";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sobre">
          <Sobre />
        </Route>
        <Route  path="/categoria/:id">
          <Categoria />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Rota404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
