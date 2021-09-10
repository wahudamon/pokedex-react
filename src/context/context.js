import React, { createContext, useContext, useState } from 'react';

// still don't know what react context is, this comment will be removed when i understand about context.
// export const MyPokemonContext = createContext({});
export const MyPokemonContext = createContext({});

const MyPokemonContextProvider = (props) => {
  let initialState = [];
  if(localStorage.hasOwnProperty("myPokemon")) {
    initialState = JSON.parse(localStorage.getItem("myPokemon"));
  }

  const [myPokemonList, setMyPokemonList] = useState(initialState);

  return (
    <MyPokemonContext.Provider value={{ myPokemonList, setMyPokemonList }}>
      {props.children}
    </MyPokemonContext.Provider>
  )
}

export const useMyPokemonList = () => {
  const {myPokemonList} = useContext(MyPokemonContext);

  return myPokemonList;
}

export const useAddMyPokemonList = () => {
  const {setMyPokemonList} = useContext(MyPokemonContext);
  
  return (pokemon) => {
    setMyPokemonList((prev) => [...prev, pokemon]);
  };
}

export const useRemoveMyPokemonList = () => {
  const {setMyPokemonList} = useContext(MyPokemonContext);
  return (nickName) => {
    setMyPokemonList((list) => list.filter((item) => item.nickName !== nickName));
  };
}

export const useCountMyPokemon = (name) => {
  const {myPokemonList} = useContext(MyPokemonContext);
  return myPokemonList.filter(x => x.name === name).length;
}

export default MyPokemonContextProvider;