import { Flex, Text, Image, Box, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import theme from "../../theme";
import bg from "../../assets/bg2.png";
import Mobilebg1 from '../../assets/Mobilebg1.png'
import timeline1 from "../../assets/timeline1.png";

export const Roadmap = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  const mapPoints = [
    {
      title: "1 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top:isSmallerThan1024?'30%': "35%",
      left:isSmallerThan1024?'31px': "85px",
    },
    {
      title: "2 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: isSmallerThan1024? '47%': "48%",
      left: isSmallerThan1024? '300px': "614px",
    },
    {
      title: "3 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
        top: isSmallerThan1024? '50%': "59%",
        left: isSmallerThan1024? '595px': "1170px",
    },
    {
      title: "4 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: isSmallerThan1024? '0%':"23%",
      left: isSmallerThan1024? '970px':"1680px",
      rotated: true,
    },
    {
      title: "5 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
        top: isSmallerThan1024? '40%':"30%",
        left: isSmallerThan1024? '1260px':"2090px",
    },
    {
      title: "6 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
        top: isSmallerThan1024? '40%':"63%",
        left: isSmallerThan1024? '1540px':"2608px",
      rotated: isSmallerThan1024? false:true,
    },
    {
      title: "7 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
        top: isSmallerThan1024? '40%':"45%",
        left: isSmallerThan1024? '1835px':"3008px",
    },
    {
      title: "8 Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
        top: isSmallerThan1024? '25%':"62%",
        left: isSmallerThan1024? '2065px':"3408px",
      rotated: true,
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
        <Flex h={"100%"} w={"49px"} mb={"150px"} >
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
             height={isSmallerThan1024 ? "160px" : "200px"}
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
            w={isSmallerThan1024 ? "140px" : "300px"}
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
              height={isSmallerThan1024 ? "160px" : "200px"}
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
          <Text
            fontSize={isSmallerThan1024 ? "14px" : "20px"}
            fontWeight={600}
            fontStyle="normal"
          >
            {title}
          </Text>
          <Text
            w={isSmallerThan1024 ? "140px" : "300px"}
            fontSize={isSmallerThan1024 ? "10px" : "16px"}
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
      backgroundImage={isSmallerThan1024? Mobilebg1: bg}
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
          px={'14px'}
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
          <Text
            fontSize={isSmallerThan1024 ? "14px" : "16px"}
            fontWeight={400}
            w={isSmallerThan1024 ? "100%" : "539px"}
            textAlign={"center"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Exercitation veniam consequat
          </Text>
        </Flex>
        <Flex
          w={isSmallerThan1024?'2252px':"3840px"}
          position={"relative"}
          mt={isSmallerThan1024 ? "230px" : "300px"}
        >
          <Image src={timeline1} h={isSmallerThan1024 ? "200px" : "100%"} />
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
