import '../../App.css';
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle,
  CardImg,
  Row,
  Col,
  Button
} from 'reactstrap';
import { PokemonColors } from '../../components/PokemonColors';
import { GetMyPokemonList, MyPokemonProvider } from '../../context/MyContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReleaseModal from '../../components/ReleaseModal';

// Soon di pisah component buat pokemon card nya

const MyPokemonCardContainer = () => {
  const myPokemonList = GetMyPokemonList();

  return (
    <Row className="mx-5 my-3 g-3">
      {myPokemonList.map(pokemon => (
        <MyPokemonCard pokemon={pokemon} />
      ))}
    </Row>
  )
}

const MyPokemonCard = (props) => {
  const [visible, setVisible] = useState(false);
  const onSetVisibility = () => setVisible(!visible);

  return (
    <Col key={props.pokemon.nickname} sm="3" md="5" lg="3">
      <Card body className="text-center" style={{backgroundColor: props.pokemon.type ? PokemonColors[props.pokemon.type[0]] : PokemonColors.normal}}>
        <Link className="text-decoration-none" to={`/details/${props.pokemon.name}`}>
          <CardBody>
            <CardTitle className="text-capitalize" style={{color: '#000', fontSize: '16pt', fontWeight: 'bold'}}>{props.pokemon.nickname}</CardTitle>
            <CardText style={{color: '#000', fontSize: '12pt'}}>({props.pokemon.name})</CardText>
            <CardImg width="100%" src={props.pokemon.image} alt="Card image cap" />
          </CardBody>
        </Link>
        <CardBody style={{backgroundColor: '#FFFFFF', borderRadius: '8px'}}>
          <Button className="btn-catch" onClick={onSetVisibility} color="link" style={{textDecoration: 'none', color: '#000'}}>Release</Button>
        </CardBody>
      </Card>
      <ReleaseModal visible={visible} onSetVisibility={onSetVisibility} pokemon={props.pokemon} />
    </Col>
  )
}

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