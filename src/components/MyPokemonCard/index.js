import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Col, 
  Card, 
  CardBody, 
  CardTitle, 
  CardText, 
  CardImg, 
  Button 
} from 'reactstrap';
import '../../App.css';
import ReleaseModal from '../ReleaseModal';
import { PokemonColors } from '../PokemonColors';

export default function MyPokemonCard(props) {
  const [visible, setVisible] = useState(false);
  const onSetVisibility = () => setVisible(!visible);

  return (
    <Col sm="3" md="6" lg="3">
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