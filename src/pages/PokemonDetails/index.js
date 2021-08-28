import { Button, Card, CardBody, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, Progress, Row, Table } from 'reactstrap';
import '../../App.css';
import { PokemonColors } from '../../components/PokemonColors';

export default function PokemonDetails() {
  return(
    <div className="app">
      <div style={{backgroundColor: PokemonColors.grass}} className="details-header mt-3">
        <img width="200px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" alt="ninetales" />
      </div>
      <Container>
        <Row>
          <Col>
            <Card body className="text-center" style={{border: "0"}}>
              <CardBody>
                <CardTitle className="text-capitalize" style={{color: "#000", fontSize: "18pt", fontWeight: "bold"}}>ninetales</CardTitle>
              </CardBody>
            </Card>
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
          <Col className="type-list-col">
            <Card body className="mt-3" style={{maxWidth: "500px", border: "0"}}>
              <CardBody>
                <CardTitle style={{color: "#000", fontSize: "18pt", fontWeight: "bold"}}>Stats</CardTitle>
                <ListGroup>
                  <ListGroupItem>
                    <div style={{color: "black"}}>HP</div>
                    <Progress value="4" max="5" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{color: "black"}}>SPEED</div>
                    <Progress value="2" max="5" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{color: "black"}}>ATTACK</div>
                    <Progress value="2" max="5" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{color: "black"}}>DEFENSE</div>
                    <Progress value="4" max="5" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{color: "black"}}>SPECIAL ATTACK</div>
                    <Progress value="3" max="5" />
                  </ListGroupItem>
                  <ListGroupItem>
                    <div style={{color: "black"}}>SPECIAL DEFENSE</div>
                    <Progress value="2" max="5" />
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}