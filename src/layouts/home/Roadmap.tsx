import { Flex, Text, Image, Box, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import theme from "../../theme";
import bg from "../../assets/bg2.png";
import Mobilebg1 from "../../assets/Mobilebg1.png";
import timeline1 from "../../assets/timeline1.png";
import timeline from "../../assets/timeline.png";
export const Roadmap = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan1640] = useMediaQuery("(max-width: 1640px)");
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

  const mapPoints = [
    {
      title: "Pre-registration",
      content:
        "LYDA is open for all creators but requires high level of social capital to monetize. Pre-registered projects will be reviewed and selected for fan token launch.",
      top: isSmallerThan1024 ? "21%" : "22%",
      left: "2%",
      height: 200,
    },
    {
      title: "LYDA Platform & Marketplace",
      content:
        "LYDA Platform will provide technical infrastructure for the full utilization of fan tokens. It is designed to  govern the token economy and fan engagements",
      top: isSmallerThan1024 ? "48%" :isSmallerThan1440? "126px":'35%',
      left: isSmallerThan1024? '30%':"40%",
      height: 300,
     
    },
    {
      title: "Economic rewards",
      content:
        "Creators obtain financial supports and token users are rewarded for both investments and non-monetary fan activities. As creators grow, return will be significant.",
      top: isSmallerThan1024 ? "40%" :isSmallerThan1440? '146px': "40%",
      left:  isSmallerThan1024 ?'75%':'73%',
      height: 200,
      
    },
  
  ];

  const [scrollDir, setScrollDir] = useState("right");
  const [mouseDir, setMouseDir] = useState("right");
  const [y, setY] = useState(0);
  const [yy, setYy] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      const currentScroll = e.currentTarget.scrollLeft;
      setY(currentScroll);

      if (currentScroll > y) {
        setScrollDir("right");
      } else {
        setScrollDir("left");
      }
    };

    document.getElementById("scrollCont")?.addEventListener("scroll", onScroll);

    return () => {
      document
        .getElementById("scrollCont")
        ?.removeEventListener("scroll", onScroll);
    };
  }, [y]);

  useEffect(() => {
    const onMove = (e: any) => {
      setYy(e.pageX);

      if (e.pageX > yy) {
        setMouseDir("right");
      } else if (e.pageX < yy) {
        setMouseDir("left");
      }
    };
    document
      .getElementById("scrollCont")
      ?.addEventListener("mousemove", onMove);
    return () =>
      document
        .getElementById("scrollCont")
        ?.removeEventListener("mousemove", onMove);
  }, [yy]);

  const RoadmapPoint = (props: {
    title: string;
    content: string;
    top: string;
    left: string;
    rotated?: boolean;
    height: number;
  }) => {
    const { title, content, top, left, rotated, height } = props;
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
        <Flex h={"100%"} w={isSmallerThan1024 ? "49px" : "89px"} mb={"150px"}>
          <Flex
            h={isSmallerThan1024 ? "50px" : "88px"}
            w={isSmallerThan1024 ? "50px" : "88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={isSmallerThan1024 ? "19px" : "25px"}
              w={isSmallerThan1024 ? "19px" : "25px"}
              bg={"blue.100"}
              opacity={1}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={isSmallerThan1024 ? "160px" : height}
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
          <Text
            fontSize={isSmallerThan1024 ? "14px" : "20px"}
            fontWeight={600}
            fontStyle="normal"
          >
            {title}
          </Text>
          <Text
            w={isSmallerThan1024 ? "180px" : "300px"}
            fontSize={isSmallerThan1024 ? "10px" : "16px"}
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
        <Flex h={"100%"} w={isSmallerThan1024 ? "49px" : "89px"}>
          <Flex
            h={isSmallerThan1024 ? "50px" : "88px"}
            w={isSmallerThan1024 ? "50px" : "88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={isSmallerThan1024 ? "19px" : "25px"}
              w={isSmallerThan1024 ? "19px" : "25px"}
              bg={"blue.100"}
              opacity={1}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={isSmallerThan1024 ? "160px" : height}
              width="1px"
              bg={"blue.100"}
              position="absolute"
              mb={isSmallerThan1024? '165px':height-25}
              opacity={isHover ? 1 : 0.3}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          position="relative"
          top={isSmallerThan1024? '-143px':-height+57}
          left={"-12px"}
          color={isHover ? "blue.100" : "white"}
          flexDir="column"
        >
          <Text
            fontSize={isSmallerThan1024 ? "14px" : "20px"}
            fontWeight={600}
            fontStyle="normal"
          >
            {title}
          </Text>
          <Text
            w={isSmallerThan1024 ? "180px" : "300px"}
            fontSize={isSmallerThan1024 ? "10px" : "14px"}
            fontWeight={"normal"}
            fontStyle="normal"
            mt={"8px"}
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
      backgroundImage={isSmallerThan1024 ? Mobilebg1 : bg}
      backgroundSize={isSmallerThan1024 ? "100% 590px" : "100% 970px"}
      h={isSmallerThan1024 ? "590px" : "970px"}
      // onScroll={detectScroll}

      zIndex={0}
      overflowX="scroll"
      alignItems="flex-start"
      id="scrollCont"
      style={{
        cursor:
          scrollDir === "right" || mouseDir === "right"
            ? `url(mouseCursorRight.png), default`
            : `url(mouseCursorLeft.png), default`,
      }}
    >
      <Flex
        fontFamily={theme.fonts.main}
        mt={isSmallerThan1024 ? "56px" : "120px"}
        flexDir={"column"}
      >
        <Flex
          position="absolute"
          // top='1893px'
          px={"14px"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          fontFamily={theme.fonts.main}
          fontStyle={"normal"}
          flexDir={"column"}
          color={"white.0"}
        >
          {" "}
          <Text
            fontWeight={600}
            fontSize={isSmallerThan1024 ? "28px" : "48px"}
            mb={isSmallerThan1024 ? "16px" : "20px"}
          >
            LYDA Roadmap
          </Text>
         
        </Flex>
        <Flex
          w={["1290px", "1920px", "fit-content"]}
          // overflow='hidden'
          position={"relative"}
          mt={isSmallerThan1024 ? "230px" : "300px"}
        >
          <Image
            src={timeline}
            h={isSmallerThan1024 ? "200px" : "100%"}
            w={"100%"}
          />
          {mapPoints.map((point: any, index: number) => (
            <RoadmapPoint
              key={index}
              title={point.title}
              content={point.content}
              top={point.top}
              left={point.left}
              rotated={point.rotated}
              height={point.height}
            />
          ))}
        </Flex>
        {/* <Flex
          left={'800px'}
          justifyContent={"flex-start"}
          alignItems="flex-start"
          flexDir={"column"}
          position="relative"
          mt={"320px"}
          id={"scrooll"}
          w='3840px'
          border={'1px solid red'}
       
        >
          <Flex >
            <Image src={timeline1} h={"341px"} />
         
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
         
        </Flex> */}
      </Flex>
    </Flex>
  );
};
