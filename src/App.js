import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import WildPokemonList from './pages/WildPokemonList';
import MyPokemonList from './pages/MyPokemonList';

function App() {
  return(
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={WildPokemonList} />
          <Route exact path="/my-pokemon" component={MyPokemonList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
