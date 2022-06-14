import {Fragment, useState} from "react";
import styled from "styled-components";
import Circle from "./Circle";
import Node from "./Node";
import Edge from "./Edge";
import {nodeMap} from "./nodeData";

const Graph = () => {
  const [nodes, setNodes] = useState([]);

  const [baseLabel] = nodeMap.keys();

  const addNode = (currentLabel) => {
    setNodes((nodes) => [
      ...nodes,
      {
        label: currentLabel ? nodeMap.get(currentLabel)[0] : baseLabel,
        properties: [],
        conditions: [],
      },
    ]);
  };

  if (!nodes.length > 0) {
    return <Circle onClick={() => addNode()}>+</Circle>;
  }

  return (
    <Wrapper>
      {nodes.map(({label, properties, conditions}, index) => {
        return (
          <Fragment>
            <Node
              label={label}
              properties={properties}
              conditions={conditions}
              key={label}
              lastNode={nodes.length === index + 1}
              addNode={addNode}
              setNodes={setNodes}
              index={index}
              nodes={nodes}
            />
            {nodes.length > 1 && nodes.length !== index + 1 && <Edge />}
          </Fragment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default Graph;
