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
import {useState} from "react";

const EditModal = ({label, properties, conditions}) => {
  const [addingCondition, setAddingCondition] = useState(false);

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
            <Select value={label} placeholder="label" maxWidth={200}>
              <option value="course">Course</option>
              <option value="book">Book</option>
              <option value="topic">Topic</option>
            </Select>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={4}
          >
            <Heading as="h6" size="xs" style={{marginRight: 24}}>
              property
            </Heading>
            <Select placeholder="property" maxWidth={200}>
              <option value="title">title</option>
              <option value="id">id</option>
            </Select>
          </Flex>
          <Flex
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
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <ButtonGroup variant="outline" spacing="4" width="100%">
              <Button width="100%">add property</Button>
              {addingCondition ? (
                <ButtonGroup variant="outline" width="100%" spacing="4">
                  <Button onClick={() => setAddingCondition(false)}>
                    {">"}
                  </Button>
                  <Button onClick={() => setAddingCondition(false)}>
                    {"<"}
                  </Button>
                  <Button onClick={() => setAddingCondition(false)}>
                    {"="}
                  </Button>
                </ButtonGroup>
              ) : (
                <Button width="100%" onClick={() => setAddingCondition(true)}>
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
