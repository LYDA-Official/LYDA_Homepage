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
      justifyContent={"center"}
      style={{
        cursor: `url(mouseCursorRight.png), default`,
      }}
    >
      <Flex alignItems={"center"}  fontFamily={theme.fonts.main}>
       <Flex justifyContent={'center'}>
        <Image
          src={DistributingSocialCapital}
          h="200px"
          w={"24%"}
          zIndex={100}
        ></Image>
        <Flex alignItems={'flex-end'} color='white.0' >
          {" "}
          <Image ml={"-112px"} src={LYDATeam}  h="640px"
          w={"600px"}></Image>
          <Flex flexDir={"column"} pl='35px' w='507px'>
            <Text fontSize={'48px'} lineHeight='35px' >OnSla2ers</Text>
            <Text fontSize={'22px'} lineHeight='35px' >Professional Valorant Team</Text>
            <Text fontSize={'14px'}>OnSla2ers is a professional Valorant team competing in Valorant
Challengers Korea. Featuring young talents, they are a team to keep an eye on!</Text>
          </Flex>
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  );
};
