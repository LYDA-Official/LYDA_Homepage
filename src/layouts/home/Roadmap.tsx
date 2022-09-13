import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import theme from "../../theme";
import bg from "../../assets/bg2.png";
import timeline from "../../assets/timeline.png";
import timeline2 from "../../assets/timeline2.png";
import timeline1 from "../../assets/timeline1.png";
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
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "6%",
      left: "102%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "54%",
      left: "130%",
      rotated: true,
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "46%",
      left: "157%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "41%",
      left: "174%",
      rotated: true,
    },
  ];

  // const scrolllogger = (e:any) => {
  //   console.log('fgfd', e);
    
  //   // const scrollableElement = document.getElementById("scrooll");
  //   window?.addEventListener("scroll", function () {
  //     const st = window.scrollX || document.body.scrollLeft;
  //     console.log("fffs");
  
  //     if (st > 0) {
  //       console.log("hhii");
  //     } else {
  //       console.log("iiih");
  //     }
  //   });
  // };
 
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageXOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 


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
      <Flex
        top={top}
        left={left}
        position="absolute"
        flexDir={"row"}
        alignItems="flex-end"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
      <Flex
        top={top}
        left={left}
        position="absolute"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
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
      overflowX="scroll"
      style={{
        cursor: `url(mouseCursor.png), default`,
      }}
    >
      <Flex fontFamily={theme.fonts.main} mt={"120px"} flexDir={"column"}>
        <Flex
          position="absolute"
          // top='1893px'
          // left={'789px'}
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
          mt={"320px"}
       
          id={"scrooll"}
        >
          <Flex w={"200%"}>
            <Image src={timeline1} h={"341px"} />
            {/* <Image src={timeline2} w={"100%"}/> */}
          </Flex>

          {mapPoints.map((point: any, index: number) => (
            <RoadmapPoint
              key={index}
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
