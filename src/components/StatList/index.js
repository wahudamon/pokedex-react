import { Card, CardBody, CardTitle, ListGroup, ListGroupItem, Progress } from "reactstrap";

function StatList(props) {
  return (
    <Card body style={{maxWidth: "580px", border: "0"}}>
      <CardBody>
        <ListGroup>
          <ListGroupItem>
            <CardTitle><h4 className="mt-2" style={{color: "#000", fontWeight: "bold"}}>Stats</h4></CardTitle>
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>HP <span>{props.hitpoint}</span></div>
            <Progress striped value={props.hitpoint} max="400" />
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>ATTACK <span>{props.attack}</span></div>
            <Progress striped value={props.attack} max="400" />
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>DEFENSE <span>{props.defense}</span></div>
            <Progress striped value={props.defense} max="400" />
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPECIAL ATTACK <span>{props.special_attack}</span></div>
            <Progress striped value={props.special_attack} max="400" />
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPECIAL DEFENSE <span>{props.special_defense}</span></div>
            <Progress striped value={props.special_defense} max="400" />
          </ListGroupItem>
          <ListGroupItem>
            <div style={{display: 'flex', justifyContent: 'space-between', color: "black"}}>SPEED <span>{props.speed}</span></div>
            <Progress striped value={props.speed} max="400" />
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  )
}

export default StatList;