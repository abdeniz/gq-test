import {Popover, PopoverTrigger} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import EdgeEditModal from "./EdgeEditModal";
import EditModal from "./EditModal";
import {schema} from "./nodeData";

const GraphItemBase = React.forwardRef(
  (
    {
      edge,
      label,
      properties,
      conditions,
      lastNode,
      addNode,
      setNodes,
      nodes,
      index: nodeIndex,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Popover placement="left" defaultIsOpen>
          <PopoverTrigger>
            <div style={{position: "relative"}}>
              <Circle ref={ref} edge={edge}>
                {edge ? (
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.850586 3.73584C0.574444 3.73584 0.350586 3.9597 0.350586 4.23584C0.350586 4.51198 0.574444 4.73584 0.850586 4.73584V3.73584ZM7.67803 4.58939C7.8733 4.39413 7.8733 4.07755 7.67803 3.88229L4.49605 0.700306C4.30079 0.505044 3.98421 0.505044 3.78895 0.700306C3.59369 0.895568 3.59369 1.21215 3.78895 1.40741L6.61737 4.23584L3.78895 7.06427C3.59369 7.25953 3.59369 7.57611 3.78895 7.77137C3.98421 7.96664 4.30079 7.96664 4.49605 7.77137L7.67803 4.58939ZM0.850586 4.73584H7.32448V3.73584H0.850586V4.73584Z"
                      fill="#676873"
                    />
                  </svg>
                ) : (
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="7.08765"
                      cy="6.30371"
                      r="5.60596"
                      stroke="#676873"
                    />
                  </svg>
                )}
              </Circle>
              {lastNode &&
                schema.find((node) => node.label === label).followingNodes
                  .length !== 0 && (
                  <AddCircle
                    onClick={() => {
                      addNode(label);
                    }}
                  />
                )}
            </div>
          </PopoverTrigger>
          {edge ? (
            <EdgeEditModal />
          ) : (
            <EditModal
              label={label}
              setNodes={setNodes}
              nodeIndex={nodeIndex}
              nodes={nodes}
              properties={properties}
              conditions={conditions}
            />
          )}
        </Popover>

        <Content>
          <Label edge>{label}</Label>
          {properties?.map((property) => (
            <Property>{property}</Property>
          ))}
          {conditions?.map(({property, comparison, value}) => (
            <Condition>{`${property} ${comparison} ${value}`}</Condition>
          ))}
        </Content>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 100px;
  }
`;

const Content = styled.div`
  margin-left: 16px;
`;

const AddCircle = styled.div`
  position: absolute;
  top: 36px;
  left: 12px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #121212;
`;

const Label = styled.h3`
  margin: 0;
  margin-bottom: 4px;
  font-weight: 600;
`;

const Property = styled.p`
  margin: 0;
  margin-left: 8px;
  color: #676873;
  font-weight: 500;
`;

const Condition = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 300;
  margin-left: 8px;
  color: #676873;
`;

export default GraphItemBase;
