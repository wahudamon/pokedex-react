import '../../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../utils/queriesList';
import { 
  Card, 
  CardBody,
  CardTitle,
  Row,
  Col,
  CardImg,
  Badge,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CountAllMyPokemon, MyPokemonProvider } from '../../context/MyContext';
import SkeletonLoader from '../../components/SkeletonLoader';

const MyPokemonSummaryBadge = () => {
  const myPokemonSummary = CountAllMyPokemon();

  return (
    <Badge style={{marginLeft: '8px', backgroundColor: '#d3d3d3', color: 'black'}}>{myPokemonSummary}</Badge>
  )
}

export default function WildPokemonList() {
  const [wildPokemon, getWildPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadMore = async () => {
    const additionalRes = await getAllPokemon();
    getWildPokemon([...wildPokemon, ...additionalRes]);
  }

  useEffect(() => {
    const fetching = async () => {
      const res = await getAllPokemon();
      getWildPokemon(res);
      setIsLoading(false);
    }

    fetching();
  }, []);

  return(
    <div className="app">
      <header className="app-header">
        Wild Pokemon
      </header>
      {isLoading && 
        <SkeletonLoader />
      }
      {!isLoading && 
        <>
          <Row className="mx-5 my-3 g-3">
        {wildPokemon.map(pokemon => (
            <Col key={pokemon.name} sm="3" md="6" lg="3">
              <Link className="text-decoration-none" to={`/details/${pokemon.name}`}>
                <Card body className="text-center" style={{backgroundColor: 'lightgray', border: '0'}}>
                  <CardBody>
                    <CardTitle className="text-capitalize" style={{color: 'gray', fontSize: '16pt', fontWeight: 'bold'}}>{pokemon.name}</CardTitle>
                    <CardImg width="100%" src={pokemon.image} alt={pokemon.name + " image"} />
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
            <div className="mb-5" style={{textAlign: 'right'}}>
              <Button onClick={handleLoadMore} color="secondary">Load More</Button>
            </div>
          </Row>
          <div className="text-center fixed-bottom mb-4">
            <a href="/my-pokemon" className="btn" style={{backgroundColor: 'gray', color: 'white', borderRadius: '10px'}}>
              My Pokemon 
              <MyPokemonProvider>
                <MyPokemonSummaryBadge/>
              </MyPokemonProvider>
            </a>
          </div>
        </>
      }
    </div>
  )
}