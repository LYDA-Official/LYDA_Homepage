import { Flex, Text, Box, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import Maskgroup from "../../assets/Maskgroup.png";
import slide from '../../assets/Slide.png'
import PlayButton from "../../assets/SVG/play.svg";

export const SeeForYourself = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");
  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");

  // const [isSmallerThan1440] = useMediaQuery("(max-width: 1200px)");

  window.onload = function () {
    const video = document.getElementById(
      "video_background"
    ) as HTMLVideoElement | null;
    const playButton = document.getElementById("play-pause");
    const videoContainer = document.getElementById("videoContainer");
    if (video != null && playButton !== null && videoContainer !== null) {
      playButton.addEventListener("click", function () {
        if (video.paused === true) {
          video.play();
          playButton.style.display = "none";
        }
      });
    }
  };
  return (
    <Flex
      bg={"white"}
      h={["100%", "864px", "1022px"]}
      w={"100%"}
      justifyContent={"center"}
      px={"14px"}
    >
      <Flex
        {...theme.LAYOUT_STYLE.layoutStyle()}
        fontFamily={theme.fonts.main}
        flexDir={"column"}
      >
        <Flex
          flexDir={"column"}
          color={"blue.200"}
          justifyContent="center"
          mt={isSmallerThan1023 ? "56px" : ""}
        >
          <Text
            fontWeight={600}
            fontSize={isSmallerThan1023 ? "28px" : "48px"}
            lineHeight={"48px"}
            mb={isSmallerThan1023 ? "16px" : "20px"}
            textAlign="center"
          >
            LYDA via Social Capital
          </Text>
          <Text
            w={"100%"}
            fontWeight={400}
            fontSize={isSmallerThan1023 ? "14px" : "16px"}
            lineHeight={isSmallerThan1023 ? "22.04px" : "25.18px"}
            textAlign="center"
            mb={["32px", "56px", "64px"]}
          >
            Learn how LYDA realizes values for creators and fans in 6 minutes. 

          </Text>
        </Flex>
        <Flex
          id={"videoContainer"}
          borderTopRightRadius={isSmallerThan1023 ? "80px" : "88px"}
          h={["100%", "514px", "600px"]}
          w={["100%", "944px", "1100px"]}
          justifyContent={"center"}
          alignItems={"center"}
          mb={["56px", "", ""]}
        >
         {!isSmallerThan1023 && <Image
            src={PlayButton}
            zIndex={10000}
            display="flex"
            position={"absolute"}
            id="play-pause"
            _hover={{ cursor: "pointer" }}
            height={isSmallerThan1023 ? "64px" : "100px"}
          />}
         
          <Box
            id="video_background"
            as="video"
            controls={true}
            muted
            h={["100%", "514px", "600px"]}
            w={["100%", "944px", "1100px"]}
            src="LYDAVideo.mp4"
            data-setup="{}"
            poster={slide}
            objectFit="contain"
            sx={{
              aspectRatio: "16/9",
            }}
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
