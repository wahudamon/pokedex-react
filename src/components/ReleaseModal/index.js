import { 
  // useContext, 
  // useEffect, 
  useState 
} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from "reactstrap";
// import { 
//   // AddMyPokemonList,
//   // GetMyPokemonList, 
//   ReleaseMyPokemon
// } from "../../context/MyContext";

export default function ReleaseModal(props) {
  const [catching, setCatching] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const [success, setSuccess] = useState(false);
  // const [nickName, setNickname] = useState("");

  // const removePokemon = ReleaseMyPokemon();

  const releasingPokemon = async () => {
    setCatching(true);
    setTimeout(() => {
      setCatching(false);
      setFirstTry(false);
      // setSuccess(!!getRandomItem())
    }, 3000)
  }

  const setDefault = () => {
    setFirstTry(true);
    setSuccess(false);
    // setNickname("");
  }

  const closeCatching = () => {
    props.onSetVisibility();
    setDefault();
  }

  // const releasePokemon = () => {
  //   setDefault();
  //   const caughtPokemon = generateCaughtPokemon(nickName, props.pokemonData);
  //   saveCaughtPokemon(caughtPokemon);
  //   console.log(caughtPokemon);
  // }

  return (
    <Modal isOpen={props.visible} toggle={props.onSetVisibility}>
      {!catching && firstTry &&
        <>
          <ModalHeader>
            Do you want to release <span className="text-capitalize">{props.pokemon.nickname}</span>?
          </ModalHeader>
          <ModalFooter>
            <Button onClick={releasingPokemon} color="info">Release!</Button>
            <Button onClick={closeCatching} color="danger">Cancel</Button>
          </ModalFooter>
        </>
      }
      {!catching && !firstTry &&
        <>
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
        </>
      }
      {catching &&
        <>
          <ModalHeader>Releasing <span className="text-capitalize">{props.pokemon.nickname}</span>...</ModalHeader>
          <ModalBody className="text-center">
            <Spinner children="" color="primary" />
          </ModalBody>
        </>
      }
    </Modal>
  )
}