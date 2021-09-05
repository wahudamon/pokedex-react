import '../../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../utils/queriesList';
import { 
  Card, 
  //CardText, 
  CardBody,
  CardTitle,
  Row,
  Col,
  CardImg,
  Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function WildPokemonList() {
  const [wildPokemon, getWildPokemon] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await getAllPokemon();
      getWildPokemon(res);
    }

    fetching();
  }, []);

  return(
    <div className="app">
      <header className="app-header">
        Wild Pokemon
      </header>
      <Row className="mx-5 my-3 g-3">
        {wildPokemon.map(pokemon => (
          <Col key={pokemon.name} sm="3" md="5" lg="3">
            <Link className="text-decoration-none" to={`/details/${pokemon.name}`}>
              <Card body className="text-center" style={{backgroundColor: 'lightgray', border: '0'}}>
                <CardBody>
                  <CardTitle className="text-capitalize" style={{color: 'gray', fontSize: '16pt', fontWeight: 'bold'}}>{pokemon.name}</CardTitle>
                  <CardImg width="100%" src={pokemon.image} alt="Card image cap" />
                </CardBody>
                {/* <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
                  <CardText style={{color: '#000', fontSize: '12pt'}}>Owned: 0</CardText>
                </CardBody> */}
              </Card>
            </Link>
          </Col>
        ))}
        </Row>
        <div className="text-center fixed-bottom mb-4">
          <a href="/my-pokemon" className="btn btn-catch" style={{backgroundColor: 'gray', color: 'white', borderRadius: '10px'}}>My Pokemon <Badge style={{backgroundColor: '#d3d3d3', color: 'black'}}>0</Badge></a>
        </div>
    </div>
  )
}