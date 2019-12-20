import React from "react";
import styled from "styled-components";

const Welcome = styled.h2 `
font-size: 2.2rem;
color:#05386B;
text-align:center;
 `
const RickBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Welcome>Welcome to the ultimate Rick &amp; Morty fan site!</Welcome>
        <RickBox>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </RickBox>
      </header>
    </section>
  );
}
