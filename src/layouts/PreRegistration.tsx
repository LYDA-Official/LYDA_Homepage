import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg.png";
export const PreRegistration = () => {
  return (
    <Flex bg={"blue.400"} backgroundImage={bg} backgroundSize={'100% 1022px'}  h={"1022px"}>
      <Text w={"100vw"}>PreRegistration</Text>
    </Flex>
  );
};
