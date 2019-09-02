import React, { useState, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import Axios from 'axios';
import Card from './components/Cards'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([{}]);
  const [page, setPage] = useState(1);
  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      Axios.get(`https://swapi.co/api/people/?page=${page}`)
        .then(res => {
          console.log(res);
          setData(res.data.results)
       })
  },[page])

  const Div = styled.div`
        width: 85%;
        margin: 0 auto;
        border-top: 2px solid rgba(255,255,255,.2);
        border-bottom: 2px solid rgba(255,255,255,.2);
        
    `
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(person => {
        return <Card name={person.name} 
                    species={person.species} 
                    homeworld={person.homeworld}
                    birthdate={person.birth_year}
                    films={person.films}
                    url={person.url}/>
                
      })}
    </div>
  );
}

export default App;
