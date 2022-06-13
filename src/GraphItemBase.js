import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const GraphItemBase = React.forwardRef((props, ref) => {
  const {edge, label, properties, conditions} = props;

  console.log(props);

  return (
    <Wrapper>
      <Circle ref={ref} edge={edge} />
      <Content>
        <Label>{label}</Label>
        {properties?.map((property) => (
          <Property>{property}</Property>
        ))}
        {conditions?.map((condition) => (
          <Condition>{condition}</Condition>
        ))}
      </Content>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
`;

const Content = styled.div`
  margin-left: 16px;
`;

const Label = styled.h3`
  margin: 0;
  margin-bottom: 4px;
`;

const Property = styled.p`
  margin: 0;
  margin-left: 8px;
`;

const Condition = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 300;
  margin-left: 8px;
`;

export default GraphItemBase;
