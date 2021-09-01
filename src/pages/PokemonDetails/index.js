import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Col, Collapse, Container, ListGroup, ListGroupItem, Row, Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../App.css';
import { PokemonColors } from '../../components/PokemonColors';
import { getPokemonDetails } from '../../utils/queriesList';

import PokeballIcon from '../../assets/images/pokeball_icon.png';
import StatList from '../../components/StatList';

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

  const [visible, setVisible] = useState(false);
  const onSetVisibility = () => setVisible(!visible);

  return(
    <div className="app">
      <div style={{backgroundColor: pokemonDetail.types ? PokemonColors[pokemonDetail.types[0].type.name] : PokemonColors.normal}} className="details-header mt-3">
        <img width="200px" src={pokemonDetail.sprites ? pokemonDetail.sprites.front_default : PokeballIcon} alt={pokemonDetail.name} />
      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="my-3 text-capitalize" style={{color: "#000", fontWeight: "bold"}}>{pokemonDetail.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            {pokemonDetail.types ? pokemonDetail.types.map(pokeType => (
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
            {pokemonDetail.stats ? <StatList hitpoint={pokemonDetail.stats[0].base_stat} attack={pokemonDetail.stats[1].base_stat} defense={pokemonDetail.stats[2].base_stat} special_attack={pokemonDetail.stats[3].base_stat} special_defense={pokemonDetail.stats[4].base_stat} speed={pokemonDetail.stats[5].base_stat} /> : <h2 className="my-3 text-capitalize" style={{color: "#000", fontWeight: "bold"}}>Loading...</h2>}
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col mb-5">
            <Card body style={{maxWidth: "580px", border: "0"}}>
              <CardBody>
                <ListGroup>
                  <ListGroupItem onClick={toggle}>
                    <CardTitle className="mt-3" style={{display: 'flex', justifyContent: 'space-between'}}><h4 style={{color: "#000", fontWeight: "bold"}}>Moves</h4> <span className="mt-1"><button style={{backgroundColor: 'transparent', border: '0'}} onClick={toggle}><i>{isOpen ? <FaArrowUp /> : <FaArrowDown />}</i></button></span></CardTitle>
                  </ListGroupItem>
                  <Collapse isOpen={isOpen}>
                    {pokemonDetail.moves ? pokemonDetail.moves.map(pokeMove => (
                      <ListGroupItem key={pokeMove.move.name}>{pokeMove.move.name}</ListGroupItem>
                    )) : <ListGroupItem>Moves not Found!</ListGroupItem>}
                  </Collapse>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={visible} toggle={onSetVisibility}>
        <ModalHeader>Wild Pokemon Found!</ModalHeader>
        <ModalBody>
          Catch this Pokemon?
        </ModalBody>
        <ModalFooter>
          <Button color="info">Catch!</Button>
          <Button onClick={onSetVisibility} color="danger">Cancel</Button>
        </ModalFooter>
      </Modal>
      <div className="text-center fixed-bottom mb-2">
        <Button className="btn-catch" onClick={onSetVisibility} color="link"><img width="50px" src={PokeballIcon} alt="pokeball-icon" /></Button>
      </div>
    </div>
  )
}