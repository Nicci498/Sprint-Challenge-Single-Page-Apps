import React, { useState } from "react";
import CharacterList from "./CharacterList.js";


export default function SearchForm (props) {
  const [search,setSearch] = useState('empty page');
  const handleChange = ev => {
    setSearch(ev.target.value);
  }
  return (
    <section className="search-form">
     <form>
       <input type='text' name='SearchField' placeholder='Search Here' onChange={ev => handleChange(ev)}/>
     </form>
     <CharacterList list={props.chars.filter(info => 
       info.name.toLowerCase().includes(search.toLowerCase())
     )}/>

    </section>
  );
}