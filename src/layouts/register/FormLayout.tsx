import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import theme from "../../theme/index";
import { FansForm } from "./FansForm";
import { CreatorsForm } from "./CreatorsForm";
import { BasicButton } from "../../common/BasicButton";
export const FormLayout = (props: { type: string }) => {
  const { type } = props;
  const navigate = useNavigate();

  return (
    <Flex
      bg="white.100"
      h="100%"
      alignItems={"center"}
      pt={"80px"}
      flexDir="column"
    >
      {type === "fans" ? <FansForm /> : <CreatorsForm />}
      <Flex w="1100px" justifyContent={"space-between"} mb="259px">
        <BasicButton
          text="Back"
          color="blue.200"
          bg="blue.0"
          h={"53px"}
          w={"170px"}
          func={() => navigate("/")}
        />
        <BasicButton
          text="Save"
          color="white.0"
          bg="purple.0"
          h={"53px"}
          w={"170px"}
       
        />
      </Flex>
    </Flex>
  );
};
