import { Flex, useTheme, Image, Text } from "@chakra-ui/react";
import React from "react";
import DistributingSocialCapital from "../../assets/SVG/DistributingSocialCapital.svg";
import LYDATeam from "../../assets/LYDATeam.png";
export const Intro = () => {
  const theme = useTheme();
  return (
    <Flex
      w={"100%"}
      id={"info"}
      bg={"purple.0"}
      h={"983px"}
      px={"auto"}
      // justifyContent={"center"}
      style={{
        cursor: `url(mouseCursorRight.png), default`,
      }}
    >
      <Flex
        alignItems={"center"}
        // justifyContent='space-between'
        fontFamily={theme.fonts.main}
        color="white.0"
        w={"100%"}
        flexDir="column"
        overflow={"hidden"}
      >
        <Flex
          w="100%"
          h="349px"
          justifyContent={"flex-end"}
          overflow="hidden"
          position={"relative"}
          style={{ filter: "blur(10px" }}
          right={"-195px"}
        >
          <Image
            overflow={"hidden"}
            src={LYDATeam}
            w={"600px"}
            h={"640px"}
            m={"30px"}
            opacity={0.5}
            top={"-191px"}
            right={"-60px"}
            boxShadow={"1px 1px 1px 1px rgba(67, 97, 238, 0.14)"}
            position="absolute"
          ></Image>
        </Flex>
        <Flex
          justifyContent={"center"}
          w={"100%"}
          top={"0%"}
          position="relative"
        >
          <Flex justifyContent={"flex-start"} h={"fit-content"}>
            <Image
              src={DistributingSocialCapital}
              w={"100%"}
              h={"100%"}
              zIndex={100}
              mt="20px"
            ></Image>
          </Flex>

          <Image ml={"-112px"} src={LYDATeam} w={"600px"} h={"640px"}></Image>
          <Flex
            flexDir={"column"}
            pl="35px"
            w="25%"
            justifyContent={"flex-end"}
          >
            <Text fontSize={"48px"}>OnSla2ers</Text>
            <Text fontSize={"22px"} mb="12px">
              Professional Valorant Team
            </Text>
            <Text fontSize={"14px"}>
              OnSla2ers is a professional Valorant team competing in Valorant
              Challengers Korea. Featuring young talents, they are a team to
              keep an eye on!
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          h="300px"
          justifyContent={"flex-start"}
          overflow="hidden"
          zIndex={1}
          style={{ filter: "blur(10px" }}
        >
          <Image
            src={LYDATeam}
            left={"-195px"}
            opacity={0.5}
            w={"31.3%"}
            boxShadow={"1px 1px 1px 1px rgba(67, 97, 238, 0.14)"}
            position="absolute"
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};
