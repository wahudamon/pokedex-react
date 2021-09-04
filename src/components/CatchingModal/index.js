import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useAddMyPokemonList, useMyPokemonList } from "../../context/context";

const generateCaughtPokemon = (nickName, pokemonData) => {
  const caughtPokemon = {
    nickname: nickName,
    name: pokemonData.name,
    image: pokemonData.sprites.front_default,
    type: pokemonData.types.map(type => (type.type.name))
  }
  return caughtPokemon;
}

export default function CatchingModal(props, { data }) {
  const [catching, setCatching] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickname] = useState("");
  const [nickNameError, setNicknameError] = useState(false);
  const [nickNameMsg, setNicknameMsg] = useState("");
  const [nickNameExist, setNicknameExist] = useState(false);
  const handleChange = (event) => setNickname(event.target.value);

  const myPokemonList = useMyPokemonList();
  const addMyPokemon = useAddMyPokemonList();

  const getRandomItem = () => {
    const arr = [1, 0];
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

  // const { isOpen, onOpen, onClose } = useDisclosure(); ini punya chakra ui

  const setDefault = () => {
    setFirstTry(true);
    setSuccess(false);
    setNickname("");
    setNicknameError(false);
    setNicknameMsg("");
  }

  const closeCatching = () => {
    //onClose(); punya chakra ui
    setDefault();
  }

  const setFalseNickName = () => {
    setNicknameError(false);
  }

  const savePokemon = () => {
    if(nickName === "") {
      setNicknameError(true);
      setNicknameMsg("Nickname harus diisi!");
    } else if(nickNameExist) {
      setNicknameError(true);
      setNicknameMsg("Nickname harus unik!");
    } else {
      setDefault();
      const pokemonCaught = generateCaughtPokemon(nickName, data);
      addMyPokemon(pokemonCaught);
      console.log(pokemonCaught);
      //onClose(); punya chakra ui
      //saveToast(nickName); punya chakra ui
    }
  }

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemonList));
    setNicknameExist(myPokemonList.some(el => el.nickName === nickName));
  }, [myPokemonList, nickName]);

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