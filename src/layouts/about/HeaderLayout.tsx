import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";
import AboutLyda from "../../assets/SVG/ABOUTLYDA.svg";

export const HeaderLayout = () => {
  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");

  return (
    <Flex
      h={isSmallerThan1023 ? "240px" : "400px"}
      alignItems="center"
      flexDir="column"
      w={"auto"}
      px={"50px"}
    >
      <Flex
        position={"absolute"}
        height={isSmallerThan1023 ? "240px" : "400px"}
        blendMode="color-dodge"
      >
        <Image src={bgSubPage}></Image>
      </Flex>
      <Flex position={"relative"} flexDir="column" alignItems={"center"}>
        <Image
          mt={isSmallerThan1023 ? "90px" : "200px"}
          src={AboutLyda}
          w={isSmallerThan1023 ? "170px" : "364.15px"}
          h={"44.24px"}
          mb={isSmallerThan1023 ? "8px" : "36.5px"}
        />
        <Text
          fontFamily={theme.fonts.main}
          color={"white.0"}
          w={"100%"}
          fontSize={isSmallerThan1023 ? "14px" : "18px"}
          textAlign="center"
          mb={"91px"}
        >
          Transforming value of fandom to economic transactions with social
          capital within.
        </Text>
      </Flex>
    </Flex>
  );
};
