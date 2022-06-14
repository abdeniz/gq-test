import React from "react";
import GraphItemBase from "./GraphItemBase";

const Node = React.forwardRef(
  (
    {label, properties, conditions, lastNode, addNode, setNodes, index, nodes},
    ref
  ) => {
    return (
      <GraphItemBase
        ref={ref}
        label={label}
        properties={properties}
        conditions={conditions}
        lastNode={lastNode}
        addNode={addNode}
        setNodes={setNodes}
        index={index}
        nodes={nodes}
      ></GraphItemBase>
    );
  }
);

export default Node;
