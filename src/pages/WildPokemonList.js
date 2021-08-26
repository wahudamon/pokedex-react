import '../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../utils/getPokemonList';
import { 
  Card, CardText, CardBody,
  CardTitle,
  Row,
  Col, 
} from 'reactstrap';
import NavBar from '../components/NavBar';

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
      <NavBar />
      <div className="App-header">
        <Row className="mx-5 my-5 g-3">
          {wildPokemon.map(pokemon => (
            <Col sm="3" md="5" lg="3">
              <Card body className="text-center" style={{backgroundColor: '#D3D3D3'}}>
                <CardBody>
                  <CardTitle className="text-capitalize" style={{color: '#000', fontSize: '16pt', fontWeight: 'bold'}}>{pokemon.name}</CardTitle>
                  <CardText style={{color: '#000', fontSize: '12pt'}}>This is pokemon.</CardText>
                </CardBody>
                <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
                  <CardText style={{color: '#000', fontSize: '12pt'}}>Owned: 0</CardText>
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