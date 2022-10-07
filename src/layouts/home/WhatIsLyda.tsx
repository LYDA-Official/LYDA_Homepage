import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";
import graph from "../../assets/graph.png";

export const WhatIsLyda = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      bg={"white"}
      h={["100%", "672px", "790px"]}
      justifyContent={"center"}
      alignItems="center"
      
      zIndex={100}
      p="auto"
       px={'14px'}
    >
      <Flex
        alignItems={"center"}
        {...theme.LAYOUT_STYLE.layoutStyle()}
        flexDir={isSmallerThan1024 ? "column" : "row"}
      >
        <Flex
          flexDir="column"
          color={"blue.200"}
          fontFamily={theme.fonts.main}
          fontStyle="normal"
          mr={["", "48px", "136px"]}
          mt={isSmallerThan1024? '56px':''}
          alignItems={isSmallerThan1024 ? "center" : ""}
        >
          <Text
            fontSize={["28px", "40px", "70px"]}
            fontWeight={isSmallerThan1024? 400:700}
            lineHeight={["44px", "62.96px", "70px"]}
          >
            WHAT IS LYDA
          </Text>
          <Text
            mt={isSmallerThan1024 ? "16px" : "32px"}
            fontSize={isSmallerThan1024 ? "14px" : "16px"}
            fontWeight={300}
            lineHeight={"25px"}
            textAlign={isSmallerThan1024? 'center':'left'}
            mb={isSmallerThan1024 ? "32px" : "50px"}
            maxW={["100%", "400px", "500px"]}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </Text>
          <Flex mb={isSmallerThan1024 ? "48px" : ""}>
            <BasicButton
              text="Whitepaper (EN)"
              bg={"purple.0"}
              color={"#ffffff"}
              h={isSmallerThan1024?'48px':'53px'}
              w={isSmallerThan1024?'148px':'180px'}
              mr={"24px"}
              link={"LYDA_Whitepaper_v1.1_220608_EN.docx.pdf"}
            />
            <BasicButton
              text="Whitepaper (KR)"
              bg={"blue.0"}
              h={isSmallerThan1024?'48px':'53px'}
              w={isSmallerThan1024?'148px':'180px'}
              color={"blue.200"}
              link={"LYDA_Whitepaper_KR.pdf"}
            />
          </Flex>
        </Flex>
        <Image
          src={graph}
          mb={isSmallerThan1024?'56px':''}
          h={["92%", "496px", "550px"]}
          w={["", "496px", "550px"]}
        />
      </Flex>
    </Flex>
  );
};
