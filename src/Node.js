import React from "react";
import GraphItemBase from "./GraphItemBase";

const Node = React.forwardRef(({label, properties, conditions}, ref) => {
  return (
    <GraphItemBase
      ref={ref}
      label={label}
      properties={properties}
      conditions={conditions}
    ></GraphItemBase>
  );
});

export default Node;
