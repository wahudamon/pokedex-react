import { Row } from 'reactstrap';
import '../../App.css';
import { GetMyPokemonList } from '../../context/PokemonContext';
import MyPokemonCard from '../MyPokemonCard';
import PokeballIcon from '../../assets/images/pokeball_icon.png';

export default function MyPokemonCardContainer(props) {
  const myPokemonList = GetMyPokemonList();

  return (
    <Row className="mx-5 my-3 g-3">
      {myPokemonList && 
        <>
          {myPokemonList.length !== 0 && myPokemonList.map(pokemon => (
            <MyPokemonCard key={pokemon.nickname} pokemon={pokemon} />
          ))}
          {myPokemonList.length === 0 && 
            <div className="app-header">
              <img width="200px" src={PokeballIcon} alt="pokeball-icon" />
              <h3>You dont have any Pokemon</h3>
              <h5>Let's catch the Wild Pokemon!</h5>
            </div>
          }
        </>
      }
      {!myPokemonList && 
        <div className="app-header">
          <img width="200px" src={PokeballIcon} alt="pokeball-icon" />
          <h3>You dont have any Pokemon</h3>
          <h5>Let's catch the Wild Pokemon!</h5>
        </div>
      }
    </Row>
  )
}