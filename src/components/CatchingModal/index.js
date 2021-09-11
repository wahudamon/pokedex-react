import { 
  // useContext, 
  useEffect, 
  useState 
} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input, Spinner } from "reactstrap";
import { 
  AddMyPokemonList,
  GetMyPokemonList 
} from "../../context/MyContext";

const generateCaughtPokemon = (nickName, pokemonData) => {
  const caughtPokemon = {
    nickname: nickName,
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    type: pokemonData.types.map(type => (type.type.name))
  }
  return caughtPokemon;
}

export default function CatchingModal(props) {
  const [catching, setCatching] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickname] = useState("");
  // const [nickNameError, setNicknameError] = useState(false);
  // const [nickNameMsg, setNicknameMsg] = useState("");
  // const [nickNameExist, setNicknameExist] = useState(false);
  const handleChange = (event) => setNickname(event.target.value);

  const myPokemonList = GetMyPokemonList();
  const saveCaughtPokemon = AddMyPokemonList();

  const getRandomItem = () => {
    // const arr = [1, 0];
    const arr = [1, 1];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  const catchingPokemon = async () => {
    setCatching(true);
    setTimeout(() => {
      setCatching(false);
      setFirstTry(false);
      setSuccess(!!getRandomItem())
    }, 3000)
  }

  const setDefault = () => {
    setFirstTry(true);
    setSuccess(false);
    setNickname("");
    props.onSetVisibility();
    // setNicknameError(false);
    // setNicknameMsg("");
  }

  const closeCatching = () => {
    setDefault();
  }

  // const setFalseNickName = () => {
  //   setNicknameError(false);
  // }

  const savePokemon = () => {
    setDefault();
    const caughtPokemon = generateCaughtPokemon(nickName, props.pokemonData);
    saveCaughtPokemon(caughtPokemon);
    console.log(caughtPokemon);
    // if(nickName === "") {
    //   setNicknameError(true);
    //   setNicknameMsg("Nickname harus diisi!");
    // } else if(nickNameExist) {
    //   setNicknameError(true);
    //   setNicknameMsg("Nickname harus unik!");
    // } else {
    //   setDefault();
    //   // const pokemonCaught = generateCaughtPokemon(nickName, data);
    //   // addMyPokemon(pokemonCaught);
    //   console.log(pokemonCaught);
    // }
  }

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList));
    // setNicknameExist(myPokemonList.some(el => el.nickName === nickName));
  }, [myPokemonList, nickName]);

  return (
    <Modal isOpen={props.visible} toggle={props.onSetVisibility}>
      {!catching && firstTry &&
        <>
          <ModalHeader>Wild Pokemon Found!</ModalHeader>
          <ModalBody>
            Catch this <span className="text-capitalize">{props.pokemonData.name}</span>?
          </ModalBody>
          <ModalFooter>
            <Button onClick={catchingPokemon} color="info">Catch!</Button>
            <Button onClick={closeCatching} color="danger">Cancel</Button>
          </ModalFooter>
        </>
      }
      {!catching && !firstTry &&
        <>
          {success &&
            <>
              <ModalHeader>Congratulations!</ModalHeader>
              <ModalBody>
                Successfully catch <span className="text-capitalize">{props.pokemonData.name}</span>!
                <Form>
                  <FormGroup>
                    <Label for="nickNameInput">Write a Nickname</Label>
                    <Input type="text" value={nickName} onChange={handleChange} id="nickNameInput" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={savePokemon} color="info">Save</Button>
                <Button onClick={closeCatching} color="danger">Cancel</Button>
              </ModalFooter>
            </>
          }
          {!success &&
            <>
              <ModalHeader>Oh Noo!</ModalHeader>
              <ModalBody>
                <span className="text-capitalize">{props.pokemonData.name}</span> is ran away! Try again?
              </ModalBody>
              <ModalFooter>
                <Button onClick={catchingPokemon} color="info">Yes</Button>
                <Button onClick={closeCatching} color="danger">No</Button>
              </ModalFooter>
            </>
          }
        </>
      }
      {catching &&
        <>
          <ModalHeader>Catching <span className="text-capitalize">{props.pokemonData.name}</span>...</ModalHeader>
          <ModalBody className="text-center">
            <Spinner children="" color="primary" />
          </ModalBody>
        </>
      }
    </Modal>
  )
}