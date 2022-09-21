import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { FansForm } from "./FansForm";
import { CreatorsForm } from "./CreatorsForm";
import { BasicButton } from "../../common/BasicButton";
import saveData from "../../firebase/saveData";
import fetchData from "../../firebase/fetchData";
export const FormLayout = (props: { type: string }) => {
  const { type } = props;

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

        <Flex onClick={() => fetchData()}>
          <BasicButton
            text="Save"
            color="white.0"
            bg="purple.0"
            h={"53px"}
            w={"170px"}
          />
        </Flex>

      </Flex>
    </Flex>
  );
};
