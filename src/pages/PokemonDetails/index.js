import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { Button, Card, CardBody, CardTitle, Col, Collapse, Container, ListGroup, ListGroupItem, Progress, Row, Table } from 'reactstrap';
import '../../App.css';
import { PokemonColors } from '../../components/PokemonColors';

export default function PokemonDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div className="app">
      <div style={{backgroundColor: PokemonColors.grass}} className="details-header mt-3">
        <img width="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" alt="ninetales" />
      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="my-3 text-capitalize" style={{color: "#000", fontWeight: "bold"}}>ninetales</h2>
          </Col>
        </Row>
        <Row>
          <Col className="type-list-col">
            <Button className="type-badge" style={{backgroundColor: PokemonColors.grass}}>Grass</Button>
            <Button className="type-badge" style={{ backgroundColor: PokemonColors.fire }}>Fire</Button>
            <Button className="type-badge" style={{ backgroundColor: PokemonColors.water }}>Water</Button>
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
                      <td className="table-content">10"</td>
                      <td className="table-content">130lbs</td>
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
                    <CardTitle><h4 style={{color: "#000", fontWeight: "bold"}}>Stats</h4></CardTitle>
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
                    <ListGroupItem>Howl</ListGroupItem>
                    <ListGroupItem>Scratch</ListGroupItem>
                    <ListGroupItem>Growl</ListGroupItem>
                    <ListGroupItem>Run</ListGroupItem>
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