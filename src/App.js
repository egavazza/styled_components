import React, { useState, useEffect } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/Temas";
import { BtnTema } from "./Components/UI/Index";
import SwitcherTema from "./Components/SwtichetTema";

console.log(temaClaro, temaOscuro);

function App() {
  const [tema, setTema] = useState (true);

  useEffect(() => {
    localStorage.setItem ("tema", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }
  console.log(toggleTema)
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema = {tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
