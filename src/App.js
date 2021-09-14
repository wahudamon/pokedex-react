import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';

const WildPokemonList = React.lazy(() => import('./pages/WildPokemonList'));
const MyPokemonList = React.lazy(() => import('./pages/MyPokemonList'));
const PokemonDetails = React.lazy(() => import('./pages/PokemonDetails'));

function App() {
  return(
    <Router>
      <Suspense fallback={""}>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={WildPokemonList} />
          <Route exact path="/my-pokemon" component={MyPokemonList} />
          <Route exact path="/details/:pokeName" component={PokemonDetails} />
        </Switch>
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
