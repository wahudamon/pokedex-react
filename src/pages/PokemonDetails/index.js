import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Col, Collapse, Container, ListGroup, ListGroupItem, Progress, Row, Table } from 'reactstrap';
import '../../App.css';
import { PokemonColors } from '../../components/PokemonColors';
import { getPokemonDetails } from '../../utils/queriesList';

import PokeballIcon from '../../assets/images/pokeball_icon.png';

export default function PokemonDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { pokeName } = useParams();
  const [pokemonDetail, getPokemonDetail] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await getPokemonDetails(pokeName);
      getPokemonDetail(res);
    }

    fetching();
  }, [pokeName])

  return(
    <div className="app">
      <div style={{backgroundColor: PokemonDetails.types !== undefined ? PokemonColors[pokemonDetail.types[0].type.name] : PokemonColors.normal}} className="details-header mt-3">
        <img width="200px" src={pokemonDetail.sprites !== undefined ? pokemonDetail.sprites.front_default : PokeballIcon} alt="jolteon" />
      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="my-3 text-capitalize" style={{color: "#000", fontWeight: "bold"}}>{pokemonDetail.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            {pokemonDetail.types !== undefined ? pokemonDetail.types.map(pokeType => (
              <Button key={pokeType.type.name} className="type-badge" style={{backgroundColor: PokemonColors[pokeType.type.name]}}>{pokeType.type.name}</Button>
            )) : <h2 className="my-3 text-capitalize" style={{color: "#000", fontWeight: "bold"}}>Loading...</h2>}
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            <Card body className="text-center mt-3" style={{maxWidth: "500px", maxHeight: "150px", borderRadius: "10px"}}>
              <CardBody>
                <Table borderless style={{marginLeft: "10px"}}>
                  <thead>
                    <tr>
                      <th className="table-header">Height</th>
                      <th className="table-header">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-content">{pokemonDetail.height}"</td>
                      <td className="table-content">{pokemonDetail.weight}lbs</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="my-3" style={{color: "#000", fontSize: "12pt"}}>Owned: 0</p>
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            <Card body style={{maxWidth: "580px", border: "0"}}>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>
                    <CardTitle><h4 className="mt-2" style={{color: "#000", fontWeight: "bold"}}>Stats</h4></CardTitle>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>HP <span>3000</span></div>
                    <Progress striped value="3000" max="5000" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPEED <span>250</span></div>
                    <Progress striped value="250" max="500" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>ATTACK <span>200</span></div>
                    <Progress striped value="200" max="500" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>DEFENSE <span>150</span></div>
                    <Progress striped value="150" max="500" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPECIAL ATTACK <span>500</span></div>
                    <Progress striped value="400" max="500" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPECIAL DEFENSE <span>300</span></div>
                    <Progress striped value="300" max="500" />
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            <Card body style={{maxWidth: "580px", border: "0"}}>
              <CardBody>
                <ListGroup>
                  <ListGroupItem onClick={toggle}>
                    <CardTitle className="mt-3" style={{display: 'flex', justifyContent: 'space-between'}}><h4 style={{color: "#000", fontWeight: "bold"}}>Moves</h4> <span className="mt-1"><button style={{backgroundColor: 'transparent', border: '0'}} onClick={toggle}><i>{isOpen ? <FaArrowUp /> : <FaArrowDown />}</i></button></span></CardTitle>
                  </ListGroupItem>
                  <Collapse isOpen={isOpen}>
                    {pokemonDetail.moves && pokemonDetail.moves.map(pokeMove => (
                      <ListGroupItem key={pokeMove.move.name}>{pokeMove.move.name}</ListGroupItem>
                    ))}
                  </Collapse>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}