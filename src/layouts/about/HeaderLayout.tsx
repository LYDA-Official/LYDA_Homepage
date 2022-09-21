import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";
import AboutLyda from "../../assets/SVG/ABOUTLYDA.svg";

export const HeaderLayout = () => {

  return (
    <Flex
      h={"400px"}
      alignItems="center"
      justifyContent={"center"}
      flexDir="column"
      w={'auto'}
    >
      <Flex position={"absolute"} height="400px">
        <Image src={bgSubPage}></Image>
      </Flex>
      <Flex position={"relative"} flexDir="column" alignItems={"center"}>
        <Image
          mt={"200px"}
          src={AboutLyda}
          w={"364.15px"}
          h={"44.24px"}
          mb={"36.5px"}
        />
        <Text fontFamily={theme.fonts.main} color={"white.0"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint
        </Text>
      </Flex>
    </Flex>
  );
};
