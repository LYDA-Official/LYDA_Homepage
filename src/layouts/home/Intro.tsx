import { Flex, useTheme, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import DistributingSocialCapital from "../../assets/SVG/DistributingSocialCapital.svg";
import LYDATeam from "../../assets/LYDATeam.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Intro = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [mainIndex, setMainIndex] = useState(0);
  const theme = useTheme();

  const items = [
    <Flex flexDir={"column"}    fontFamily={theme.fonts.main}>
      {" "}
      <Image src={LYDATeam} />
      <Flex flexDir={"column"} color="#ffffff" mt={'-22px'}>
        <Text fontSize={"28px"}>OnSla2ers</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text fontSize={"12px"} fontWeight={300} fontStyle='normal'>
          OnSla2ers is a professional Valorant team competing in Valorant
          Challengers Korea. Featuring young talents, they are a team to keep an
          eye on!
        </Text>
      </Flex>
    </Flex>,

<Flex flexDir={"column"}  fontFamily={theme.fonts.main}>
{" "}
<Image src={LYDATeam} />
<Flex flexDir={"column"} color="#ffffff" mt={'-22px'}>
  <Text fontSize={"28px"}>fast5</Text>
  <Text fontSize={"16px"}>Professional Valorant Team</Text>
  <Text fontSize={"12px"}>
    OnSla2ers is a professional Valorant team competing in Valorant
    Challengers Korea. Featuring young talents, they are a team to keep an
    eye on!
  </Text>
</Flex>
</Flex>,
    <Flex flexDir={"column"}  fontFamily={theme.fonts.main}>
    {" "}
    <Image src={LYDATeam} />
    <Flex flexDir={"column"} color="#ffffff"mt={'-22px'}>
      <Text fontSize={"28px"}>se7en</Text>
      <Text fontSize={"16px"}>Professional Valorant Team</Text>
      <Text fontSize={"12px"}>
        OnSla2ers is a professional Valorant team competing in Valorant
        Challengers Korea. Featuring young talents, they are a team to keep an
        eye on!
      </Text>
    </Flex>
  </Flex>,
  ];

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };
  const thumbItems = (items: any, [setThumbIndex, setThumbAnimation]: any) => {
    return items.map((item: any, i: number) => (
      <div
        // className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
        style={{ width: "296px" }}
      >
        {item}
      </div>
    ));
  };

  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const carasoulStyles = `
   .alice-carousel__stage-item{
    margin-right: 20px;
   }
   .alice-carousel__stage-item{
    opacity:0.3
   }
   .alice-carousel__stage-item.__target{
   opacity:1
   }
  `;
  return isSmallerThan1024 ? (
    <Flex
      w={"100%"}
      id={"info"}
      bg={"purple.0"}
      h={"645px"}
     flexDir='column'
      // justifyContent={"center"}
    > <Image
    src={DistributingSocialCapital}
    w={"253px"}
    h={"100px"}
    zIndex={100}
    mt="90px"
    ml={'14px'}
  ></Image>
  <Flex mt={'-17px'}>
      <style>{carasoulStyles}</style>
      <AliceCarousel
        items={thumbs}
        autoWidth
        disableDotsControls
        disableButtonsControls
        activeIndex={thumbIndex}
        infinite={true}
        paddingLeft={0}
        paddingRight={0}
        onSlideChanged={syncThumbs}
        mouseTracking={false}
        touchTracking={!mainAnimation}
      />
      </Flex>
    </Flex>
  ) : (
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
