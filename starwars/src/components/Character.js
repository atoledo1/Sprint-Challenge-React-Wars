
import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 2.5px solid Bisque;
  background: rgb(0, 23, 36);
  background: linear-gradient(
    90deg,
    rgba(0, 23, 36, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  width: 45%;
  margin: 10px auto 0 auto;
 

  h1 {
    font-size: 15px;
    background-color: navy;
    padding: 10px;
    color: darkturquoise;
    font-weight: bold;
  }

  h1,
  p {
    margin: 3px;
  }

  p {
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    color: white;
    padding-top: 2%;
  }
`;

const Character = (character) => {
  return (
    <Cards>
      <Card>
        <h1>{character.name}</h1>
        <p>Height: {character.height}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Gender: {character.gender}</p>
        <p>Eye Color: {character.eye_color}</p>
      </Card>
    </Cards>
  );
};

export default Character;
