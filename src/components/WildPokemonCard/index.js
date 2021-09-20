import { 
  Card, 
  CardBody, 
  CardTitle, 
  CardImg 
} from 'reactstrap';
import '../../App.css';

export default function WildPokemonCard(props) {
  return (
    <Card body className="text-center" style={{backgroundColor: 'lightgray', border: '0'}}>
      <CardBody>
        <CardTitle className="text-capitalize" style={{color: 'gray', fontSize: '16pt', fontWeight: 'bold'}}>{props.pokemon.name}</CardTitle>
        <CardImg width="100%" src={props.pokemon.image} alt={props.pokemon.name + " image"} />
      </CardBody>
    </Card>
  )
}