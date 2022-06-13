import React, {useState} from "react";
import styled from "styled-components";
import "./App.css";
import Edge from "./Edge";
import LineTo from "./LineTo";
import Node from "./Node";

function App() {
  const [fromComponent, setFromComponent] = useState();
  const [toComponent, setToComponent] = useState();

  return (
    <Wrapper>
      <Node
        label="Course"
        properties={["title", "id"]}
        conditions={["id = 0"]}
        ref={(ref) => setFromComponent(ref)}
      />
      <Edge label="uses" transitive />
      <Node
        label="Book"
        properties={["title"]}
        ref={(ref) => setToComponent(ref)}
      />
      <LineTo from={fromComponent} to={toComponent} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default App;
