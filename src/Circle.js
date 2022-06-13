import styled from "styled-components";

const Circle = styled.div`
  width: ${({edge}) => (edge ? "24px" : "32px")};
  height: ${({edge}) => (edge ? "24px" : "32px")};
  margin-left: ${({edge}) => (edge ? "4px" : "0")};
  border-radius: 16px;
  background-color: #ffffff;
  border: 1px solid #efefef;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Circle;
