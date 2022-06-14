import {
  Button,
  ButtonGroup,
  CloseButton,
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
import {useState} from "react";
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

    const availableProperty = nodeSchema.properties.find(
      (schemaProperty) => !properties.includes(schemaProperty)
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

  const handleAddNewCondition = (comparison) => {
    const newCondition = {
      property: nodeSchema.properties[conditions.length],
      comparison: comparison,
      value: "0",
    };

    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.conditions.push(newCondition);

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const handleEditConditionProperty = (v, index) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.conditions[index].property = v.target.value;

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const handleEditConditionValue = (v, index) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.conditions[index].value = v.target.value;

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const removeProperty = (propertyIndex) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.properties.splice(propertyIndex, 1);

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  const removeCondition = (conditionIndex) => {
    const newNode = nodes.find((_, index) => index === nodeIndex);
    newNode.conditions.splice(conditionIndex, 1);

    const newNodes = nodes.map((node, index) => {
      if (index === nodeIndex) {
        return newNode;
      }

      return node;
    });

    setNodes(newNodes);
  };

  console.log(properties, conditions);

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
                marginRight={1}
              >
                {nodeSchema.properties
                  .filter(
                    (schemaProperty) =>
                      !properties.includes(schemaProperty) ||
                      property === schemaProperty
                  )
                  .map((schemaProperty) => (
                    <option value={schemaProperty}>{schemaProperty}</option>
                  ))}
              </Select>
              <CloseButton onClick={() => removeProperty(index)} />
            </Flex>
          ))}
          {conditions.map(({property, comparison, value}, index) => (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              marginBottom={4}
            >
              <Heading as="h6" size="xs" style={{marginRight: 24}}>
                condition
              </Heading>
              <Select
                value={property}
                marginRight={2}
                minWidth={20}
                onChange={(v) => handleEditConditionProperty(v, index)}
              >
                {nodeSchema.properties
                  .filter(
                    (schemaProperty) =>
                      !properties.includes(schemaProperty) ||
                      property === schemaProperty
                  )
                  .map((schemaProperty) => (
                    <option value={schemaProperty}>{schemaProperty}</option>
                  ))}
              </Select>
              <Heading as="h6" size="xs" marginRight={2}>
                {comparison}
              </Heading>
              <Input
                isRequired
                value={value}
                onChange={(v) => handleEditConditionValue(v, index)}
                marginRight={1}
              />
              <CloseButton onClick={() => removeCondition(index)} />
            </Flex>
          ))}
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
                  disabled={conditions?.length >= nodeSchema.properties.length}
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
