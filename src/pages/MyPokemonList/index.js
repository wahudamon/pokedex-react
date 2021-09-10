import '../../App.css';
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
} from 'reactstrap';
import { PokemonColors } from '../../components/PokemonColors';
import { GetMyPokemonList, MyPokemonProvider } from '../../context/MyContext';

// Soon di pisah component buat pokemon card nya

const MyPokemonCard = () => {
  const myPokemonList = GetMyPokemonList();

  return (
    <Row className="mx-5 my-3 g-3">
      {myPokemonList.map(pokemon => (
        <Col sm="3" md="5" lg="3">
          <Card body className="text-center" style={{backgroundColor: pokemon.type ? PokemonColors[pokemon.type[0]] : PokemonColors.normal}}>
            <CardBody>
              <CardTitle className="text-capitalize" style={{color: '#000', fontSize: '16pt', fontWeight: 'bold'}}>{pokemon.nickname}</CardTitle>
              <CardText style={{color: '#000', fontSize: '12pt'}}>({pokemon.name})</CardText>
              <CardImg width="100%" src={pokemon.image} alt="Card image cap" />
            </CardBody>
            <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '15px'}}>
              <CardText style={{color: '#000', fontSize: '12pt'}}>Release</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}


export default function MyPokemonList() {
  return(
    <div className="app">
      <header className="app-header">
        My Pokemon
      </header>
        <MyPokemonProvider>
          <MyPokemonCard/>
        </MyPokemonProvider>
    </div>
  )
}