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

export const CountAllMyPokemon = () => {
  const {myPokemonList} = useContext(MyPokemonContext)

  return myPokemonList.length
}

export const ReleaseMyPokemon = () => {
  const {myPokemonList } = useContext(MyPokemonContext)
  const {setMyPokemonList} = useContext(MyPokemonContext)

  return (nickName) => {

    setMyPokemonList((list) => {
      if(list.length > 1) {
        list.filter((item) => item.nickname !== nickName);
      } else {
        myPokemonList.splice(0, 1);
        localStorage.setItem('myPokemon', JSON.stringify(myPokemonList))
      }
    })
  }
}


export {MyPokemonContext, MyPokemonProvider}