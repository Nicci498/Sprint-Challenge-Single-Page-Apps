import React, {useState , useEffect} from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import {Route,Link} from 'react-router-dom';
import styled from "styled-components";

import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterList from "./components/CharacterList.js";

const Nav = styled.nav`
display:flex;
justify-content: space-evenly;
`


export default function App() {
  const [chars,setChars] = useState([]);
  const [locs,setLocs] = useState([]);


  useEffect( () => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
  },[])
  return (
    <main>
      <Header />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/search'>Search</Link>
      </Nav>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={() =><CharacterList list={chars}/>}/>
      <Route path='/search' component= { () =><SearchForm chars={chars} locs={locs}/>}/>
    </main>
  );
}