import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function CatchingModal(props) {
  return (
    <Modal isOpen={props.visible} toggle={props.onSetVisibility}>
      <ModalHeader>Wild Pokemon Found!</ModalHeader>
      <ModalBody>
        Catch this <span className="text-capitalize">{props.pokemonName}</span>?
      </ModalBody>
      <ModalFooter>
        <Button color="info">Catch!</Button>
        <Button color="danger">Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default CatchingModal;