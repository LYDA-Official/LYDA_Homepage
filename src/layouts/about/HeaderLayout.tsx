import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";
export const HeaderLayout = () => {
  return (
    <Flex
      h={"400px"}
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      backgroundImage={bgSubPage}
      alignItems="center"
      fontFamily={"Saira"}
      backgroundSize={"100% 400px"}
      flexDir='column'
    >
      <Text
        mt={"175px"}
        fontSize="60px"
        color={"transparent"}
        lineHeight="94px"
        fontStyle="normal"
        style={{
          WebkitTextStrokeWidth: 1,
          WebkitTextStrokeColor: "white",
        }}
      >
        {" "}
        ABOUT LYDA
      </Text>
      <Text color={'white.0'}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
      </Text>
    </Flex>
  );
};
