import styled from "styled-components";

const Circle = styled.div`
  width: ${({edge}) => (edge ? "24px" : "32px")};
  height: ${({edge}) => (edge ? "24px" : "32px")};
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #efefef;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export default Circle;
