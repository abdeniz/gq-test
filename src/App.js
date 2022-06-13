import React, {useState} from "react";
import styled from "styled-components";
import "./App.css";
import Line from "./Line";
import Node from "./Node";

function App() {
  const [fromComponent, setFromComponent] = useState();
  const [toComponent, setToComponent] = useState();

  return (
    <Wrapper>
      <Node className="node_1" ref={(ref) => setFromComponent(ref)} />
      <Node className="node_2" ref={(ref) => setToComponent(ref)} />
      <Line from={fromComponent} to={toComponent} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

export default App;
