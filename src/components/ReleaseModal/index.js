import { 
  useState 
} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { 
  ReleaseMyPokemon
} from "../../context/PokemonContext";

export default function ReleaseModal(props) {
  const [success, setSuccess] = useState(false);

  const removePokemonData = ReleaseMyPokemon();

  const setDefault = () => {
    setSuccess(false);
  }

  const closeCatching = () => {
    props.onSetVisibility();
    setDefault();
  }

  const releasePokemon = () => {
    setSuccess(true);
    props.onSetVisibility();
    removePokemonData(props.pokemon.nickname);
  }

  return (
    <Modal isOpen={props.visible} toggle={props.onSetVisibility}>
      {!success &&
        <>
          <ModalHeader>
            Do you want to release <span className="text-capitalize">{props.pokemon.nickname}</span>?
          </ModalHeader>
          <ModalFooter>
            <Button onClick={releasePokemon} color="info">Release!</Button>
            <Button onClick={closeCatching} color="danger">Cancel</Button>
          </ModalFooter>
        </>
      }
      {success &&
        <>
          <ModalBody>
            Successfully release <span className="text-capitalize">{props.pokemon.nickname}</span>!
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeCatching} color="danger">Exit</Button>
          </ModalFooter>
        </>
      }
    </Modal>
  )
}