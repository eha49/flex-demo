import { createGlobalStyle } from "styled-components";
import FlexDemo from "./components/FlexDemo/FlexDemo.jsx";
import { COLORS } from "./components/constants.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <FlexDemo />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding-top: 32px;
    background-color: ${COLORS.primary};
    color: ${COLORS.white};

    @media (max-width: ${550 / 16}rem) {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

export default App;
