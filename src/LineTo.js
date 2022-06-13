import styled from "styled-components";

const LineTo = ({from, to}) => {
  return (
    <Line width="100%" height="100%">
      {from && to && (
        <>
          <line
            x1={from.offsetLeft + 17}
            y1={from.offsetTop + 34}
            x2={to.offsetLeft + 17}
            y2={to.offsetTop - 4}
            stroke="#676873"
            strokeWidth={3}
            strokeDasharray={(6, 6)}
            markerEnd="url(#chevron)"
          />

          <marker
            id="chevron"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="7"
            markerHeight="11"
            orient="auto-start-reverse"
          >
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.20898 9.02734L5.20898 5.0273L1.20898 1.02734"
                stroke="#676873"
                strokeWidth="1.7"
              />
            </svg>
          </marker>
        </>
      )}
    </Line>
  );
};

const Line = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default LineTo;
