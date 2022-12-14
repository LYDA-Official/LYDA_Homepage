import * as React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { RegisterHeaderLayout } from "../layouts/register/RegisterHeaderLayout";
import PreRegisterCreators from "../assets/SVG/PreRegisterCreators.svg";
import { FormLayout } from "../layouts/register/FormLayout";

export const CreatorsRegister = () => {
  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");

  return (
    <Flex
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      flexDir={"column"}
    >
      <RegisterHeaderLayout
        image={PreRegisterCreators}
        height={isSmallerThan1023? '44px':"56.9px"}
        width={isSmallerThan1023?'300px':'634.18px'}
        title={
          "Assessment a level of social capital that you have earned in the fandom"
        }
      />
      <FormLayout type="creators" />
    </Flex>
  );
};
