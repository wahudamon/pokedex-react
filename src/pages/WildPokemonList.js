import '../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../utils/getPokemonList';
import { 
  Button, Card, CardText, CardBody,
  CardTitle,
  Row,
  Col, 
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
    <div>
      <div className="App-header">
        <Row className="mx-5 my-5 g-3">
          {wildPokemon.map(pokemon => (
            <Col sm="3" md="5" lg="3">
              <Card body className="text-center">
                <CardBody>
                  <CardTitle className="text-capitalize" style={{color: '#000', fontWeight: 'bold'}}><h3>{pokemon.name}</h3></CardTitle>
                  <CardText style={{color: '#000', fontSize: '12pt'}}>This is pokemon.</CardText>
                  <Button color="danger">Catch!</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
          </Row>
      </div>
    </div>
  )
}

export default WildPokemonList;