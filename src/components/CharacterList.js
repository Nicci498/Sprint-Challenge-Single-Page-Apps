import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
 
  return (
    <section className="character-list">
      <h2>Character</h2>
      <p>{props.list.map((char, key)=><CharacterCard character={char} key={key}/>)}</p>
    </section>
  );
}
