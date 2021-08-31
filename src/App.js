import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Spinner } from "reactstrap";

import './App.css';
import NavBar from './components/NavBar';
// import WildPokemonList from './pages/WildPokemonList';
// import MyPokemonList from './pages/MyPokemonList';
// import PokemonDetails from "./pages/PokemonDetails";

const WildPokemonList = React.lazy(() => import('./pages/WildPokemonList'));
const MyPokemonList = React.lazy(() => import('./pages/MyPokemonList'));
const PokemonDetails = React.lazy(() => import('./pages/PokemonDetails'));

function App() {
  return(
    <Router>
      {/* <Suspense fallback={<h1>Loading Data...</h1>}> */}
      <Suspense fallback={<Spinner />}>
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
