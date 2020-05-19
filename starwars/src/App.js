import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import axios from "axios";
import "./App.css";

const starWarsApi = "https://swapi.py4e.com/api/people/";

const App = () => {
  

  const [characters, setCharacters] = useState([])
    useEffect(() => {
      axios
        .get(starWarsApi)
        .then((response) => {
          setCharacters(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

  return (
    <div className="App">
      <h1 className="Header"> Meet Star Wars Characters!</h1>
      {characters.map((character, ndx) => {
        return <Character 
        key = {ndx}
        name={character.name}
        height={character.height}
        hair_color={character.hair_color}
        gender={character.gender}
        eye_color={character.eye_color}
        />
      })}
    </div>
  );
}

export default App;

