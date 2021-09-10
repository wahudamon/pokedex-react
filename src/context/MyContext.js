import { createContext, useContext, useState } from "react"

const MyPokemonContext = createContext()

const MyPokemonProvider = ({children}) => {
  let initialValue = []
  if(localStorage.hasOwnProperty("myPokemon")) {
    initialValue = JSON.parse(localStorage.getItem("myPokemon"))
  }

  const [myPokemonList, setMyPokemonList] = useState(initialValue)

  return (
    <MyPokemonContext.Provider value={{ myPokemonList, setMyPokemonList }}>
      {children}
    </MyPokemonContext.Provider>
  )
}

export const GetMyPokemonList = () => {
  const {myPokemonList} = useContext(MyPokemonContext)

  return myPokemonList
}

export const AddMyPokemonList = () => {
  const {setMyPokemonList} = useContext(MyPokemonContext)

  return (pokemon) => {
    setMyPokemonList((prev) => [...prev, pokemon])
  }
}



export {MyPokemonContext, MyPokemonProvider}