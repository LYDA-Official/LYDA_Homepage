import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";
import graph from "../../assets/graph.png";

export const WhatIsLyda = () => {
  return (
    <Flex bg={"white"} h={"790px"} justifyContent={"center"} px={"auto"} zIndex={100}>
      <Flex alignItems={"center"} {...theme.LAYOUT_STYLE.layoutStyle()}>
        <Flex
          w={"100%"}
          flexDir="column"
          color={"blue.200"}
          fontFamily={theme.fonts.main}
          fontStyle="normal"
          mr={"136px"}
        >
          <Text fontSize={"70px"} fontWeight={700} lineHeight={"70px"}>
            WHAT IS LYDA
          </Text>
          <Text
            mt={"32px"}
            fontSize={"16px"}
            fontWeight={300}
            lineHeight={"25px"}
            mb={"50px"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </Text>
          <Flex>
            <BasicButton
              text="Whitepaper (EN)"
              bg={"purple.0"}
              color={"#ffffff"}
              mr={"24px"}
              link={"LYDA_Whitepaper_v1.1_220608_EN.docx.pdf"}
            />
            <BasicButton
              text="Whitepaper (KR)"
              bg={"blue.0"}
              color={"blue.200"}
              link={"LYDA_Whitepaper_KR.pdf"}
            />
          </Flex>
        </Flex>
        <Image src={graph} h={"550px"} w={"550px"} />
      </Flex>
    </Flex>
  );
};
