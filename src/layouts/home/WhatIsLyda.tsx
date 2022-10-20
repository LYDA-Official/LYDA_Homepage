import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";
import graph from "../../assets/graph.png";

export const WhatIsLyda = () => {
  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");

  return (
    <Flex
      bg={"white"}
      h={["100%", "672px", "790px"]}
      justifyContent={"center"}
      alignItems="center"
      zIndex={100}
      p="auto"
      px={"14px"}
    >
      <Flex
        alignItems={"center"}
        {...theme.LAYOUT_STYLE.layoutStyle()}
        flexDir={isSmallerThan1023 ? "column" : "row"}
      >
        <Flex
          flexDir="column"
          color={"blue.200"}
          fontFamily={theme.fonts.main}
          fontStyle="normal"
          mr={["", "48px", "136px"]}
          mt={isSmallerThan1023 ? "56px" : ""}
          alignItems={isSmallerThan1023 ? "center" : ""}
        >
          <Text
            fontSize={["28px", "40px", "70px"]}
            fontWeight={700}
            lineHeight={["44px", "62.96px", "70px"]}
          >
            WHAT IS LYDA
          </Text>
          <Text
            mt={isSmallerThan1023 ? "16px" : "32px"}
            fontSize={isSmallerThan1023 ? "14px" : "16px"}
            fontWeight={400}
            lineHeight={"25px"}
            textAlign={isSmallerThan1023 ? "center" : "left"}
            mb={isSmallerThan1023 ? "32px" : "50px"}
            maxW={["100%", "400px", "500px"]}
          >
            LYDA is a platform to launch social tokens to transform social
            capitals in fandoms into economic benefits for creators and fans.
            LYDA eliminated the early stage investment for fan token IDO's on
            the technical side, and establish independent token economies for
            creators. Launching fan token, creators are invited to 'LYDA
            Platform' for full supports in token governance set-up, NFT trades,
            and fan rewarding system implementation
          </Text>
          <Flex mb={isSmallerThan1023 ? "48px" : ""}>
            <BasicButton
              text="Whitepaper (EN)"
              bg={"purple.0"}
              color={"#ffffff"}
              h={isSmallerThan1023 ? "48px" : "53px"}
              w={isSmallerThan1023 ? "148px" : "180px"}
              mr={"24px"}
              link={"LYDA_Whitepaper_v1.1_220608_EN.docx.pdf"}
            />
            <BasicButton
              text="Whitepaper (KR)"
              bg={"blue.0"}
              h={isSmallerThan1023 ? "48px" : "53px"}
              w={isSmallerThan1023 ? "148px" : "180px"}
              color={"blue.200"}
              link={"LYDA_Whitepaper_KR.pdf"}
            />
          </Flex>
        </Flex>
        <Image
          src={graph}
          mb={isSmallerThan1023 ? "56px" : ""}
          h={["92%", "496px", "550px"]}
          w={["", "496px", "550px"]}
        />
      </Flex>
    </Flex>
  );
};
