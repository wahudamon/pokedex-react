import '../../App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../utils/queriesList';
import { 
  Row,
  Col,
  Badge,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CountAllMyPokemon, MyPokemonProvider } from '../../context/PokemonContext';
import SkeletonLoader from '../../components/SkeletonLoader';
import WildPokemonCard from '../../components/WildPokemonCard';

const MyPokemonSummaryBadge = () => {
  const myPokemonSummary = CountAllMyPokemon();

  return (
    <Badge style={{marginLeft: '8px', backgroundColor: '#d3d3d3', color: 'black'}}>{myPokemonSummary}</Badge>
  )
}

export default function WildPokemonList() {
  const [wildPokemon, getWildPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadMoreButtonText, setLoadMoreButtonText] = useState('');

  const handleLoadMore = async () => {
    setLoadMoreButtonText('Please Wait...');
    const additionalRes = await getAllPokemon();
    getWildPokemon([...wildPokemon, ...additionalRes]);
    setLoadMoreButtonText('Load More');
  }

  useEffect(() => {
    const fetching = async () => {
      const res = await getAllPokemon();
      getWildPokemon(res);
      setLoadMoreButtonText('Load More');
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
                <WildPokemonCard pokemon={pokemon} />
              </Link>
            </Col>
          ))}
            <div className="mb-5" style={{textAlign: 'right'}}>
              <Button onClick={handleLoadMore} color="secondary">{loadMoreButtonText}</Button>
            </div>
          </Row>
          <div className="text-center fixed-bottom mb-3">
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