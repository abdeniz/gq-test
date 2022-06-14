import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
  Select,
} from "@chakra-ui/react";
import {Fragment, useState} from "react";
import {schema} from "./nodeData";

const EditModal = ({
  label,
  properties,
  conditions,
  setNodes,
  nodeIndex,
  nodes,
}) => {
  const [addingCondition, setAddingCondition] = useState(false);

  const parentNode = nodes.find((_, index) => index === nodeIndex - 1);

  const parentNodeSchema = schema.find(
    (nodeSchema) => nodeSchema.label === parentNode?.label
  );

  const nodeSchema = schema.find((nodeSchema) => nodeSchema.label === label);

  const handleLabelEdit = (newLabel) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.label = newLabel;

    const newNodes = nodes.map((_, index) => {
      if (index === nodeIndex) {
        return newNode;
      }
    });

    setNodes(newNodes);
  };

  const handleAddNewProperty = () => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    const properties = newNode.properties;

    const availableProperty = nodeSchema.properties.find((property) =>
      properties.some((elem) => property !== elem)
    );

    if (!availableProperty) {
      newNode.properties.push(nodeSchema.properties[1]);
    } else {
      newNode.properties.push(availableProperty);
    }

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const handleEditProperty = (v, index) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.properties[index] = v.target.value;

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const handleAddNewCondition = (comparer) => {};

  return (
    <Portal>
      <PopoverContent width={400}>
        <PopoverArrow />
        <PopoverHeader>Edit node query</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody padding={4}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={4}
          >
            <Heading as="h6" size="xs" style={{marginRight: 24}}>
              label
            </Heading>
            <Select
              value={label}
              onChange={(v) => handleLabelEdit(v.target.value)}
              maxWidth={200}
            >
              {nodeIndex === 0
                ? schema.map((node) => (
                    <option value={node.label}>{node.label}</option>
                  ))
                : parentNodeSchema.followingNodes.map((node) => (
                    <option value={node.label}>{node.label}</option>
                  ))}
            </Select>
          </Flex>
          {properties.map((property, index) => (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={4}
            >
              <Heading as="h6" size="xs" style={{marginRight: 24}}>
                property
              </Heading>
              <Select
                value={property}
                onChange={(v) => handleEditProperty(v, index)}
                maxWidth={200}
              >
                {nodeSchema.properties
                  .filter(
                    (schemaProperty) =>
                      schemaProperty === property ||
                      !properties.includes(schemaProperty)
                  )
                  .map((schemaProperty) => (
                    <option value={schemaProperty}>{schemaProperty}</option>
                  ))}
              </Select>
            </Flex>
          ))}
          {/* <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={4}
          >
            <Heading as="h6" size="xs" style={{marginRight: 24}}>
              condition
            </Heading>
            <Select marginRight={2} minWidth={20}>
              <option value="option2">id</option>
              <option value="option1">title</option>
            </Select>
            <Heading as="h6" size="xs" marginRight={2}>
              =
            </Heading>
            <Input></Input>
          </Flex> */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <ButtonGroup variant="outline" spacing="4" width="100%">
              <Button
                width="100%"
                onClick={handleAddNewProperty}
                disabled={properties?.length >= nodeSchema.properties.length}
              >
                add property
              </Button>
              {addingCondition ? (
                <ButtonGroup variant="outline" width="100%" spacing="4">
                  <Button
                    onClick={() => {
                      setAddingCondition(false);
                      handleAddNewCondition(">");
                    }}
                  >
                    {">"}
                  </Button>
                  <Button
                    onClick={() => {
                      setAddingCondition(false);
                      handleAddNewCondition("<");
                    }}
                  >
                    {"<"}
                  </Button>
                  <Button
                    onClick={() => {
                      setAddingCondition(false);
                      handleAddNewCondition("=");
                    }}
                  >
                    {"="}
                  </Button>
                </ButtonGroup>
              ) : (
                <Button
                  width="100%"
                  onClick={() => {
                    setAddingCondition(true);
                  }}
                >
                  add condition
                </Button>
              )}
            </ButtonGroup>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};

export default EditModal;
