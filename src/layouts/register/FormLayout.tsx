import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, } from "react-router-dom";

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

    </Flex>
  );
};
