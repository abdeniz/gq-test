import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Node = React.forwardRef(({className}, ref) => {
  return (
    <Wrapper ref={ref} className={className}>
      <Circle />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
`;

export default Node;
