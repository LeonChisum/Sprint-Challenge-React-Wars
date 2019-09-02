import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import Axios from 'axios';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [name, setName] = useState('')
  const [homeworld, setHomeworld] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [films, setFilms] = useState('')
  const [species, setSpecies] = useState('')
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      Axios.get(`https://swapi.co/api/people/?page=1`)
        .then(res => {
          console.log(res);
          let results = res.data.results
          results.forEach(person => {
            setName(person.name)
            setHomeworld(person.homeworld)
            setBirthdate(person.birth_year)
            setFilms(person.films)
            setSpecies(person.species)
          }
        )})
  },)

  const Div = styled.div`
        width: 85%;
        margin: 0 auto;
        border-top: 2px solid rgba(255,255,255,.2);
        border-bottom: 2px solid rgba(255,255,255,.2);
        
    `
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Div>
        <h1> { name } </h1>
      </Div>
    </div>
  );
}

export default App;
