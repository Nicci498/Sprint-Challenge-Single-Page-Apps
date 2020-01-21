import React from "react";
import styled from "styled-components";

const Cast = styled.h3`
color:#379683;
font-size:1.8rem;
`;
const Spec = styled.p`
color:#290090;
font-size:1.4rem;
`;
export default function CharacterCard (props) {
  return (
    <div className="charCard">
      <Cast>{props.character.name}</Cast>
      <Spec>Species: {props.character.species}</Spec>
     
    </div>
  );
}