import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../theme";
import bg from "../../assets/bg2.png";
import timeline from "../../assets/timeline.png";

export const Roadmap = () => {
  const mapPoints = [
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "27%",
      left: "3%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "47.8%",
      left: "32%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "55%",
      left: "57%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "26%",
      left: "78%",
      rotated: true,
    },
  ];

  const RoadmapPoint = (props: {
    title: string;
    content: string;
    top: string;
    left: string;
    rotated?: boolean;
  }) => {
    const { title, content, top, left, rotated } = props;
    const [isHover, setIsHover] = useState(false);

    return rotated ? (
      <Flex top={top} left={left} position="absolute" flexDir={'row'} alignItems='flex-end'>
        <Flex h={"100%"} w={"89px"} mb={"150px"}>
          <Flex
            h={"88px"}
            w={"88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={"25px"}
              w={"25px"}
              bg={"blue.100"}
              opacity={1}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={"200px"}
              width="1px"
              bg={"blue.100"}
              position="absolute"
              mt={"175px"}
              opacity={isHover ? 1 : 0.3}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          position="relative"
         
          left={"-12px"}
          color={isHover ? "blue.100" : "white"}
          flexDir="column"
        >
          <Text fontSize={"20px"} fontWeight={600} fontStyle="normal">
            {title}
          </Text>
          <Text
            w={"300px"}
            fontSize={"16px"}
            fontWeight={"normal"}
            fontStyle="normal"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    ) : (
      <Flex top={top} left={left} position="absolute">
        <Flex h={"100%"} w={"89px"} mb={"150px"}>
          <Flex
            h={"88px"}
            w={"88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={"25px"}
              w={"25px"}
              bg={"blue.100"}
              opacity={1}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={"200px"}
              width="1px"
              bg={"blue.100"}
              position="absolute"
              mb={"175px"}
              opacity={isHover ? 1 : 0.3}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          position="relative"
          top={"-143px"}
          left={"-12px"}
          color={isHover ? "blue.100" : "white"}
          flexDir="column"
        >
          <Text fontSize={"20px"} fontWeight={600} fontStyle="normal">
            {title}
          </Text>
          <Text
            w={"300px"}
            fontSize={"16px"}
            fontWeight={"normal"}
            fontStyle="normal"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    );
  };
  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg}
      backgroundSize={"100% 970px"}
      h={"970px"}
      justifyContent={"center"}
      zIndex={0}
    >
      <Flex fontFamily={theme.fonts.main} mt={"120px"} flexDir={"column"}>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          fontFamily={theme.fonts.main}
          fontStyle={"normal"}
          flexDir={"column"}
          color={"white.0"}
        >
          {" "}
          <Text fontWeight={600} fontSize={"48px"} mb={"20px"}>
            LYDA Roadmap
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight={400}
            w={"539px"}
            textAlign={"center"}
            mb={"180px"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Exercitation veniam consequat sunt nostrud amet. Amet
          </Text>
        </Flex>
        <Flex
          justifyContent={"flex-start"}
          alignItems="flex-start"
          flexDir={"column"}
          position="relative"
        >
          <Image src={timeline} w={"100%"} position="relative" />
          {mapPoints.map((point: any) => (
            <RoadmapPoint
              title={point.title}
              content={point.content}
              top={point.top}
              left={point.left}
              rotated={point.rotated}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
