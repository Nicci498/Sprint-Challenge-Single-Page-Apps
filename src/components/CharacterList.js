import React from "react";
import styled from "styled-components";


import CharacterCard from "./CharacterCard";


const Head = styled.h2 `
font-size: 2.4rem;
color:#05386B;
 `

export default function CharacterList(props) {
  return (
    <section className="character-list">
      <Head>Characters</Head>
      {props.list.map((c,k)=><CharacterCard character={c} key={k}/>)}
    </section>
  );
}