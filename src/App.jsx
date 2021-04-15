import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Rota404 from "./paginas/Pagina404";
import Cabecalho from "./components/Cabecalho";

import "./assets/css/base/base.css";

function App() {
  return (
    <Router>
      <Cabecalho/>
      <Switch>
       
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sobre">
            <Sobre />
          </Route>
          <Route>
            <Rota404/>
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
