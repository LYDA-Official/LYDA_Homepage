import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";
import AboutLyda from "../../assets/SVG/ABOUTLYDA.svg";

export const HeaderLayout = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      h={isSmallerThan1024 ? "240px" : "400px"}
      alignItems="center"
      justifyContent={"center"}
      flexDir="column"
      w={"auto"}
    >
      <Flex
        position={"absolute"}
        height={isSmallerThan1024 ? "240px" : "400px"}
      >
        <Image src={bgSubPage}></Image>
      </Flex>
      <Flex position={"relative"} flexDir="column" alignItems={"center"}>
        <Image
          mt={isSmallerThan1024 ? "10px" : "200px"}
          src={AboutLyda}
          w={isSmallerThan1024 ? "170px" : "364.15px"}
          h={"44.24px"}
          mb={isSmallerThan1024 ? "8px" : "36.5px"}
        />
        <Text
          fontFamily={theme.fonts.main}
          color={"white.0"}
          w={isSmallerThan1024 ? "261px" : "100%"}
          fontSize={isSmallerThan1024 ? "14px" : "18px"}
          textAlign="center"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint
        </Text>
      </Flex>
    </Flex>
  );
};
