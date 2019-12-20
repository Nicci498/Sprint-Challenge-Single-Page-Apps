import React from "react";
import styled from "styled-components";

const Main = styled.h1`
font-size: 3rem;
color:#5CDB95;
`

export default function Header() {
  return (
    <header className="ui centered">
      <Main className="ui center">Rick &amp; Morty Fan Page</Main>
    </header>
  );
}
