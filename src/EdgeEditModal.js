import {
  Checkbox,
  Flex,
  Heading,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Portal,
  Select,
} from "@chakra-ui/react";

const EditModal = ({label, properties, conditions}) => {
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
              property
            </Heading>
            <Select maxWidth={200}>
              <option value="uses">uses</option>
            </Select>
          </Flex>{" "}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Checkbox defaultChecked>Transitive</Checkbox>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Portal>
  );
};

export default EditModal;
