import { Flex, Text, Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import Maskgroup from "../../assets/Maskgroup.png";
import PlayButton from "../../assets/SVG/play.svg";

export const SeeForYourself = () => {
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

      // videoContainer.addEventListener('mouseenter',
      // function () {

      //     playButton.style.display = "flex";

      // }
      // )
      // videoContainer.addEventListener('mouseleave',
      // function () {

      //     playButton.style.display = "none";

      // }
      // )
    }
  };
  return (
    <Flex bg={"white"} h={"1022px"} w={"100%"} justifyContent={"center"}>
      <Flex
        {...theme.LAYOUT_STYLE.layoutStyle()}
        fontFamily={theme.fonts.main}
        flexDir={"column"}
      >
        <Flex flexDir={"column"} color={"blue.200"} justifyContent='center'>
          <Text
            fontWeight={600}
            fontSize={"48px"}
            lineHeight={"48px"}
            mb={"20px"}
            textAlign='center'
          >
            See For Yourself
          </Text>
          <Text
            w={"539px"}
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"25.18px"}
            textAlign='center'
            mb={"64px"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Exercitation veniam consequat sunt nostrud amet. Amet
          </Text>
        </Flex>
        <Flex
          id={"videoContainer"}
          borderTopRightRadius={"88px"}
          h={"600px"}
          w={"1100px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={PlayButton}
            zIndex={10000}
            display="flex"
            position={"absolute"}
            id="play-pause"
            _hover={{ cursor: "pointer" }}
          />
          {/* <Button
          zIndex={10000}
          color={"red"}
          position={"absolute"}
          id="play-pause"
        >
          ▶︎
        </Button> */}
          <Box
            id="video_background"
            as="video"
            controls={true}
            muted
            h={"600px"}
            w={"1100px"}
            src="zoom_0.mp4"
            data-setup="{}"
            poster={Maskgroup}
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
