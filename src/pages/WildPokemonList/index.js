import '../../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../utils/queriesList';
import { 
  Card, CardText, CardBody,
  CardTitle,
  Row,
  Col,
  CardImg, 
} from 'reactstrap';

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
          <Col sm="3" md="5" lg="3">
            <Card body className="text-center" style={{backgroundColor: '#949494'}}>
              <CardBody>
                <CardTitle className="text-capitalize" style={{color: '#FFF', fontSize: '16pt', fontWeight: 'bold'}}>{pokemon.name}</CardTitle>
                <CardImg width="100%" src={pokemon.image} alt="Card image cap" />
              </CardBody>
              <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
                <CardText style={{color: '#000', fontSize: '12pt'}}>Owned: 0</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
        </Row>
    </div>
  )
}