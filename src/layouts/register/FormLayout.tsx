import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, useMatch } from "react-router-dom";

import theme from "../../theme/index";
import { FansForm } from "./FansForm";
import { CreatorsForm } from "./CreatorsForm";
import { BasicButton } from "../../common/BasicButton";
export const FormLayout = (props: { type: string }) => {
  const { type } = props;
  const navigate = useNavigate();
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

  return (
    <Flex
      bg="white.100"
      h="100%"
      alignItems={"center"}
      pt={"80px"}
      flexDir="column"
    >
      {type === "fans" ? <FansForm /> : <CreatorsForm />}
      <Flex w={isSmallerThan1440?'944px' :"1100px"} justifyContent={"space-between"} mb={isSmallerThan1440? '88px':"259px"}>
        <NavLink to={"/"}>
          <BasicButton
            text="Back"
            color="blue.200"
            bg="blue.0"
            h={"53px"}
            w={"170px"}
          />
        </NavLink>

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
