import {ChakraProvider} from "@chakra-ui/react";
import {useState} from "react";
import styled from "styled-components";
import "./App.css";
import Edge from "./Edge";
import LineTo from "./LineTo";
import Node from "./Node";

function App() {
  const [fromComponent, setFromComponent] = useState();
  const [toComponent, setToComponent] = useState();

  return (
    <ChakraProvider>
      <Wrapper>
        <Node
          label="course"
          properties={["title", "id"]}
          conditions={["id = 0"]}
          ref={(ref) => setFromComponent(ref)}
        />
        <Edge label="uses" transitive />
        <Node
          label="book"
          properties={["title"]}
          ref={(ref) => setToComponent(ref)}
        />
        <LineTo from={fromComponent} to={toComponent} />
      </Wrapper>
    </ChakraProvider>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default App;
