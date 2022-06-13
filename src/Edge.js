import GraphItemBase from "./GraphItemBase";

const Edge = ({label, properties, transitive}) => {
  return (
    <GraphItemBase
      label={label}
      conditions={transitive && ["transitive"]}
      edge
    ></GraphItemBase>
  );
};

export default Edge;
