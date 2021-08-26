import '../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../utils/getPokemonList';
import { 
  Button, Card, CardText, CardBody,
  CardTitle, 
} from 'reactstrap';

function WildPokemonList() {
  const [wildPokemon, getWildPokemon] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await getAllPokemon();
      getWildPokemon(res);
    }

    fetching();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {wildPokemon.map(pokemon => (
          <Card>
            <CardBody>
              <CardTitle style={{color: '#000', fontWeight: 'bold'}}><h3>{pokemon.name}</h3></CardTitle>
              <CardText style={{color: '#000', fontSize: '12pt'}}>This is pokemon.</CardText>
              <Button color="danger">Catch!</Button>
            </CardBody>
          </Card>
        ))}
      </header>
    </div>
  )
}

export default WildPokemonList;