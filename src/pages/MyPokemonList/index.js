import '../../App.css';
import { 
  Card, CardText, CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import { PokemonColors } from '../../components/PokemonColors';

export default function MyPokemonList() {
  return(
    <div className="app">
      <header className="app-header">
        My Pokemon
      </header>
      <Row className="mx-5 my-3 g-3">
        <Col sm="3" md="5" lg="3">
          <Card body className="text-center" style={{backgroundColor: PokemonColors.fire}}>
            <CardBody>
              <CardTitle className="text-capitalize" style={{color: '#FFF', fontSize: '16pt', fontWeight: 'bold'}}>Cimon</CardTitle>
              <CardText style={{color: '#FFF', fontSize: '12pt'}}>(Charmander)</CardText>
            </CardBody>
            <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
              <CardText style={{color: '#000', fontSize: '12pt'}}>Release</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" md="5" lg="3">
          <Card body className="text-center" style={{backgroundColor: PokemonColors.grass}}>
            <CardBody>
              <CardTitle className="text-capitalize" style={{color: '#FFF', fontSize: '16pt', fontWeight: 'bold'}}>Cihuy</CardTitle>
              <CardText style={{color: '#FFF', fontSize: '12pt'}}>(Bulbasaur)</CardText>
            </CardBody>
            <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
              <CardText style={{color: '#000', fontSize: '12pt'}}>Release</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}