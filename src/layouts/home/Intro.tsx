import { Flex, useTheme, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import DistributingSocialCapital from "../../assets/SVG/DistributingSocialCapital.svg";
import LYDATeam from "../../assets/LYDATeam.png";
import AliceCarousel from "react-alice-carousel";
import dios from "../../assets/dios.png";
import shadows from "../../assets/shadows.png";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Intro = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan1480] = useMediaQuery("(max-width: 1480px)");
  const [isSmallerThan653] = useMediaQuery("(max-width: 653px)");
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [mainIndex, setMainIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const slider = useRef<any>([]);

  const projects = [
    {
      name: "OnSla2ers",
      title: "Professional eSports Team",
      description:
        "Established with the top class esports athletes of Valorant, OnSla2yers is growing for multiple esports IP’s and the global fans with its operative economics structured on LYDA. OnSla2yers presents a solution to the positive value circulation that is one of the major problems of the eSports industry.",
      image: LYDATeam,
    },
    {
      name: "DIOS",
      title: "K-Pop Artists",
      description:
        "DIOS presents the trendy K-Pop music and intends to grow with its fans. The social channels of DIOS is especially active in South America, mostly accessed by the fans in Mexico, Brazil, Argentina, and Peru. LYDA will support DIOS to engage the cross-boarder fans regardless of the physical distance and local currency systems.",
      image: dios,
    },
    {
      name: "XR1",
      title: "Drone Racing League",
      description:
        "XR1 drone racing league was founded to implement sustainable/static drone sports league in 2020 for on/offline competitions of the national top drone pilots of South Korea, who are also highly competitive world-wide. XR1 will utilize LYDA to escalate the fan activities from spectating to organic sponsorship to achieve full commercialization.",
      image: shadows,
    },
  ];

  const settings = {
    accessibility: true,
    centerMode: true,
    infinite: true,
    centerPadding: "-70px",
    slidesToShow: 2.3,
    speed: 500,
    focusOnSelect: true,
    slidesToScroll: 1,
    // variableWidth:true,
    // initialSlide: currentSlide,
   arrows:false,
    swipeToSlide: true,
  
    // rtl: true,
    beforeChange: (next: any) => setCurrentSlide(next),
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const mobileSettings = {
    accessibility: true,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows:false,
    swipeToSlide: true,
    variableWidth: true,
    beforeChange: (next: any) => setCurrentSlide(next),
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const slickerStyles = `
 .slick-slide .slick-cloned{
    margin-left:-50px !important
  }
  ."slick-slide slick-active slick-center slick-current{
    margin'right:40px !important
  }
  `;

  const mobileSlickerStyles = `
  .slick-slide slick-active slick-current{
    margin-right:16px !important
  }
  `
  console.log(currentSlide);

  return isSmallerThan1024 ? (
    <Flex
      w={"100%"}
      id={"info"}
      bg={"purple.0"}
      h={"645px"}
      flexDir="column"
      // pl='14px'
      // justifyContent={"center"}
    >
      {" "}
      <Image
        src={DistributingSocialCapital}
        w={"253px"}
        h={"100px"}
        zIndex={100}
        position="absolute"
        mt="90px"
      ml='14px'
      ></Image>
<style>{mobileSlickerStyles}</style>
        <Slider {...mobileSettings}>{
           projects.map((item: any, index: number) => (
            <Flex flexDir={"column"} fontFamily={theme.fonts.main} mt={'174px'} position='relative' ml='14px' >
            {" "}
            <Image src={item.image} w='296px' h={'316px'} opacity={currentSlide === index ?1:0.3}/>
            <Flex flexDir={"column"} color="#ffffff" mt={"-60px"}    display={currentSlide === index ? "flex" : "none"}>
              <Text fontSize={"28px"}>{item.name}</Text>
              <Text fontSize={"16px"}>{item.title}</Text>
              <Text fontSize={"12px"} fontWeight={300} fontStyle="normal" w={'296px'} mt='8px'>
               {item.description}
              </Text>
            </Flex>
          </Flex>
           ))}
        </Slider>
   
    </Flex>
  ) : (
    <Flex
      w={"100%"}
      id={"info"}
      bg={"purple.0"}
      h={"983px"}
      px={"auto"}
      justifyContent="center"
      alignItems={"center"}
      // justifyContent={"center"}
      style={{
        cursor: `url(mouseCursorRight.png), default`,
      }}
    >
      <Flex flexDir={"column"} w="100%" mt={"103px"}>
        <Image
          src={DistributingSocialCapital}
          w={"442px"}
          h={"200px"}
          // top={'203px'}
          mt={"-20px"}
          ml={"10%"}
          zIndex={100}
          position="absolute"
          // mt="20px"
        ></Image>
        <style>{slickerStyles}</style>
        <Slider {...settings} ref={slider}>
          {projects.map((item: any, index: number) => (
            <Flex
              zIndex={currentSlide === index ? 100 : -1}
              display={"flex !important"}
              flexDir={"row"}
              fontFamily={theme.fonts.main}
              w={"980px"}
              mr={"20px"}
              py={"40px"}
              key={index}

              // onClick={() => slider.current.slickGoTo(index)}
            >
              {" "}
              <Image
                src={item.image}
                w={isSmallerThan1024 ? "296px" : "600px"}
                h={isSmallerThan1024 ? "" : "640px"}
                filter={currentSlide === index ? "blur(0px)" : "blur(20px)"}
                opacity={currentSlide === index ? 1 : 0.5}
              />
              <Flex
                flexDir={"column"}
                color="#ffffff"
                zIndex={currentSlide === index ? 100 : -1}
                justifyContent="flex-end"
                display={currentSlide === index ? "flex" : "none"}
                ml={isSmallerThan1480 ? "-188px" : "24px"}
                mt={isSmallerThan1480 ? "491px" : ""}
                //  position='absolute'
              >
                <Text fontSize={"28px"} zIndex={100}>
                  {item.name}
                </Text>
                <Text fontSize={"16px"} zIndex={100}>
                  {" "}
                  {item.title}
                </Text>
                <Text
                  fontSize={isSmallerThan1024 ? "12px" : "14px"}
                  fontWeight={isSmallerThan1024 ? 300 : 400}
                  fontStyle="normal"
                  w={"360px"}
                  zIndex={100}
                >
                  {item.description}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Flex>
    </Flex>
  );
};
