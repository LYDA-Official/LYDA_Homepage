import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/bg.png";
import theme from "../theme/index";
import { BasicButton } from "../common/BasicButton";
export const PreRegistration = () => {
  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg}
      backgroundSize={"100% 1022px"}
      h={"1022px"}
      justifyContent={"center"}
      px={"auto"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        fontFamily={theme.fonts.main}
        fontStyle={"normal"}
        flexDir={"column"}
        mb={"64px"}
      >
        {" "}
        <Text fontWeight={600} fontSize={"48px"} mb={"20px"}>
          PreRegistration
        </Text>
        <Text
          fontSize={"16px"}
          fontWeight={400}
          w={"539px"}
          textAlign={"center"}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Exercitation veniam consequat sunt nostrud amet. Amet
        </Text>
      </Flex>
      <Flex w={"100%"} justifyContent={"center"} fontFamily={theme.fonts.main}>
        <Flex
          flexDir={"column"}
          h={"502px"}
          w={"600px"}
          pt={"160px"}
          px={"60px"}
          _hover={{
            background:
              "linear-gradient(134.5deg, #55C2FF -23.18%, #4361EE 94.24%)",
            boxShadow: "0px 16px 56px rgba(19, 90, 95, 0.75)",
          }}
          bg={"purple.0"}
        >
          <Text
            fontWeight={600}
            fontSize={"40px"}
            fontStyle={"normal"}
            lineHeight={"63px"}
          >
            CREATORS
          </Text>
          <Text
            fontWeight={400}
            fontSize={"16px"}
            fontStyle={"normal"}
            lineHeight={"25px"}
            mb={'56px'}
          >
            Fuel your career by joining the LYDA Creator Coalition! Open a new
            stream of revenue via branded tokens for fans, create new ways to
            interact with your community, and reward those who consistently
            contribute. What are you waiting for?
          </Text>
          <BasicButton text="BTN" color="white.0" bg="transparent" border="2px solid #ffffff"/>
        </Flex>

        <Flex
          h={"502px"}
          px={"60px"}
          w={"600px"}
          flexDir={"column"}
          pt={"160px"}
          bg={"blue.0"}
          borderTopRightRadius={"80px"}
          color={theme.colors.blue[200]}
          _hover={{
            background:
              "linear-gradient(139.33deg, #82FFB4 -57.9%, #07F1FF 98.53%)",
            boxShadow: "0px 16px 56px rgba(3, 23, 115, 0.75)",
          }}
        >
          <Text
            fontWeight={600}
            fontSize={"40px"}
            fontStyle={"normal"}
            lineHeight={"63px"}
          >
            FANS
          </Text>
          <Text
            fontWeight={400}
            fontSize={"16px"}
            fontStyle={"normal"}
            lineHeight={"25px"}
            mb={'56px'}
          >
            Enjoy exclusive rewards and community privileges all while
            supporting your favorite content creators. As token holders, get
            ready to participate in perpetuating social capital!
          </Text>
          <BasicButton text="BTN" color="blue.200" bg="transparent" border="2px solid #060B22"/>
        </Flex>
      </Flex>
    </Flex>
  );
};
