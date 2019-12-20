import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from "axios";


export default function App() {
  const [chars,setChars] = useState([]);
  const [locs,setLocs] = useState([]);
  const [eps,setEps] = useState([]);

  useEffect( () => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setChars(res.data.results))
      .catch(err => console.log(err));
    axios.get("https://rickandmortyapi.com/api/location")
      .then(res => setLocs(res.data.results))
      .catch(err => console.log(err));
    axios.get("https://rickandmortyapi.com/api/episode")
      .then(res => setEps(res.data.results))
      .catch(err => console.log(err));
  },[])
  return (
    <main>
      <Header />
    </main>
  );
}
