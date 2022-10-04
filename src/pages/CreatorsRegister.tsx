import * as React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { RegisterHeaderLayout } from "../layouts/register/RegisterHeaderLayout";
import PreRegisterCreators from "../assets/SVG/PreRegisterCreators.svg";
import { FormLayout } from "../layouts/register/FormLayout";

export const CreatorsRegister = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      flexDir={"column"}
    >
      <RegisterHeaderLayout
        image={PreRegisterCreators}
        height={isSmallerThan1024? '44px':"56.9px"}
        width={isSmallerThan1024?'300px':'634.18px'}
        title={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. "
        }
      />
      <FormLayout type="creators" />
    </Flex>
  );
};
