import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
   //useAddMyPokemonList, 
   useMyPokemonList 
  } from "../../context/context";

// const generateCaughtPokemon = (nickName, pokemonData) => {
//   const caughtPokemon = {
//     nickname: nickName,
//     name: pokemonData.name,
//     image: pokemonData.sprites.front_default,
//     type: pokemonData.types.map(type => (type.type.name))
//   }
//   return caughtPokemon;
// }

export default function CatchingModal(props) {
  const [catching, setCatching] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickname] = useState("");
  // const [nickNameError, setNicknameError] = useState(false);
  // const [nickNameMsg, setNicknameMsg] = useState("");
  // const [nickNameExist, setNicknameExist] = useState(false);
  // const handleChange = (event) => setNickname(event.target.value);

  const myPokemonList = useMyPokemonList();
  // const addMyPokemon = useAddMyPokemonList();

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

  const setDefault = () => {
    setFirstTry(true);
    setSuccess(false);
    setNickname("");
    // setNicknameError(false);
    // setNicknameMsg("");
  }

  const closeCatching = () => {
    props.onSetVisibility();
    setDefault();
  }

  // const setFalseNickName = () => {
  //   setNicknameError(false);
  // }

  // const savePokemon = () => {
  //   if(nickName === "") {
  //     setNicknameError(true);
  //     setNicknameMsg("Nickname harus diisi!");
  //   } else if(nickNameExist) {
  //     setNicknameError(true);
  //     setNicknameMsg("Nickname harus unik!");
  //   } else {
  //     setDefault();
  //     // const pokemonCaught = generateCaughtPokemon(nickName, data);
  //     const pokemonCaught = generateCaughtPokemon(nickName);
  //     // addMyPokemon(pokemonCaught);
  //     console.log(pokemonCaught);
  //   }
  // }

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
                    <Label for="nickNameLabel">Write a Nickname</Label>
                    <Input type="text" id="nickNameLabel" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button onClick={closeCatching} color="info">Save</Button>
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
          <ModalHeader>Catching Wild Pokemon...</ModalHeader>
          <ModalBody>
            Now loading....
          </ModalBody>
        </>
      }
    </Modal>
  )
}