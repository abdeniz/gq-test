import {ChakraProvider} from "@chakra-ui/react";
import styled from "styled-components";
import "./App.css";
import Graph from "./Graph";

function App() {
  return (
    <ChakraProvider>
      <div className="wrapper">
        <Wrapper>
          <Graph />
        </Wrapper>
      </div>
    </ChakraProvider>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default App;
