import styled from "styled-components";

const Line = ({from, to}) => {
  console.log(from && from.offsetLeft);

  return (
    <StyledLine width="100%" height="100%">
      {from && to && (
        <line
          x1={from.offsetLeft + 16}
          y1={from.offsetTop + 16}
          x2={to.offsetLeft + 16}
          y2={to.offsetTop + 16}
          stroke="#676873"
          strokeWidth={2}
          strokeDasharray={(6, 6)}
        />
      )}
    </StyledLine>
  );
};

const StyledLine = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export default Line;
