import React from "react"
import styled from "styled-components"
const Card = (props) =>{

    const Div = styled.div`
        width: 85%;
        margin: 0 auto;
        border-top: 2px solid rgba(255,255,255,.2);
        border-bottom: 2px solid rgba(255,255,255,.2);
        
    `
    return(
        <Div key={props.url}>
        <h1>{ props.name }</h1>
        <ul>
            <li>Species: { props.species }</li>
            <li>Planet World: { props.homeworld }</li>
            <li>Year of Origin: { props.birthdate } </li>
            <li>Appearances: { props.films } </li> 
        </ul>
        </Div>
    );
};

export default Card