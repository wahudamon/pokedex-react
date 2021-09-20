import '../../App.css';
import MyPokemonCardContainer from '../../components/MyPokemonCardContainer';
import { MyPokemonProvider } from '../../context/PokemonContext';

export default function MyPokemonList() {
  return(
    <div className="app">
      <header className="app-header">
        My Pokemon
      </header>
      <MyPokemonProvider>
        <MyPokemonCardContainer />
      </MyPokemonProvider>
    </div>
  )
}