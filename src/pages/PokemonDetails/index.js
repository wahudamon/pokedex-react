import { Button, Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../App.css';
import { PokemonColors } from '../../components/PokemonColors';

export default function PokemonDetails() {
  return(
    <div className="app">
      <div style={{backgroundColor: PokemonColors.grass}} className="details-header mt-3">
        <img width="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" alt="ninetales" />
      </div>
      <Container>
        <Row>
          <Col>
            <Card body className="text-center" style={{border: "0"}}>
              <CardBody>
                <CardTitle className="text-capitalize" style={{color: "#000", fontSize: "18pt", fontWeight: "bold"}}>ninetales</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="2" md="5" lg="3">
            <Button style={{width: '80px', backgroundColor: PokemonColors.grass, border: 0}}>Grass</Button>
            <Button style={{width: '80px', backgroundColor: PokemonColors.fire, border: 0}}>Fire</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}