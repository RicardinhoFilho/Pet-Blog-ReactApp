import React, { useState, useEffect } from "react";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import "../assets/css/blog.css";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";
import { busca } from "../api/api";
import Subcategoria from "../paginas/Subcategorias"

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  //console.log(subcategorias);
  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />

      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => {
          return (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          );
        })}
      </ul>

      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`${path}/posts?categoria=${id}`} />
        </Route>

        <Route path={`${path}/:subcategoria`}>
          <Subcategoria/>
        </Route>
      </Switch>
    </>
  );
};
export default Categoria;
