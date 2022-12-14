import * as React from "react";
import { Flex,useMediaQuery } from "@chakra-ui/react";
import { RegisterHeaderLayout } from "../layouts/register/RegisterHeaderLayout";
import { FormLayout } from "../layouts/register/FormLayout";
import PreRegisterFans from "../assets/SVG/PreRegisterFans.svg";

export const FansRegister = () => {
    const [isSmallerThan1023] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      flexDir={"column"}
      justifyContent="center"
    >
      <RegisterHeaderLayout
        image={PreRegisterFans}
        height={isSmallerThan1023? '44px':"56.9px"}
        width={isSmallerThan1023? '300px':"634.2px"}
        title={
          "Learn our potential fan token users to maximize the rewards"
        }
      />
      <FormLayout type="fans" />
    </Flex>
  );
};
