import { Flex, useTheme, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import DistributingSocialCapital from "../../assets/SVG/DistributingSocialCapital.svg";
import LYDATeam from "../../assets/LYDATeam.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Intro = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [mainIndex, setMainIndex] = useState(0);
  const theme = useTheme();

  const items = [
    <Flex flexDir={"column"} fontFamily={theme.fonts.main}>
      {" "}
      <Image src={LYDATeam} />
      <Flex flexDir={"column"} color="#ffffff" mt={"-22px"}>
        <Text fontSize={"28px"}>OnSla2ers</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text fontSize={"12px"} fontWeight={300} fontStyle="normal">
          OnSla2ers is a professional Valorant team competing in Valorant
          Challengers Korea. Featuring young talents, they are a team to keep an
          eye on!
        </Text>
      </Flex>
    </Flex>,

    <Flex flexDir={"column"} fontFamily={theme.fonts.main}>
      {" "}
      <Image src={LYDATeam} />
      <Flex flexDir={"column"} color="#ffffff" mt={"-22px"}>
        <Text fontSize={"28px"}>fast5</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text fontSize={"12px"}>
          OnSla2ers is a professional Valorant team competing in Valorant
          Challengers Korea. Featuring young talents, they are a team to keep an
          eye on!
        </Text>
      </Flex>
    </Flex>,
    <Flex flexDir={"column"} fontFamily={theme.fonts.main}>
      {" "}
      <Image src={LYDATeam} />
      <Flex flexDir={"column"} color="#ffffff" mt={"-22px"}>
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

  const itemsDesktop = [
    <Flex
      flexDir={isSmallerThan1024 ? "column" : "row"}
      fontFamily={theme.fonts.main}
    >
      {" "}
      <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
      <Flex
        flexDir={"column"}
        color="#ffffff"
        mt={isSmallerThan1024 ? "-22px" : ""}
        display={thumbIndex === 0 ? "flex" : "none"}
      >
        <Text fontSize={"28px"}>OnSla2ers</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text
          fontSize={isSmallerThan1024 ? "12px" : "14px"}
          fontWeight={isSmallerThan1024 ? 300 : 400}
          fontStyle="normal"
          w={"360px"}
        >
          OnSla2ers is a professional Valorant team competing in Valorant
          Challengers Korea. Featuring young talents, they are a team to keep an
          eye on!
        </Text>
      </Flex>
    </Flex>,

    <Flex
      flexDir={isSmallerThan1024 ? "column" : "row"}
      fontFamily={theme.fonts.main}
    >
      {" "}
      <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
      <Flex
        flexDir={"column"}
        color="#ffffff"
        mt={isSmallerThan1024 ? "-22px" : ""}
        display={thumbIndex === 1 ? "flex" : "none"}
      >
        <Text fontSize={"28px"}>OnSla2ers</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text
          fontSize={isSmallerThan1024 ? "12px" : "14px"}
          fontWeight={isSmallerThan1024 ? 300 : 400}
          fontStyle="normal"
          w={"360px"}
        >
          OnSla2ers is a professional Valorant team competing in Valorant
          Challengers Korea. Featuring young talents, they are a team to keep an
          eye on!
        </Text>
      </Flex>
    </Flex>,
    <Flex
      flexDir={isSmallerThan1024 ? "column" : "row"}
      fontFamily={theme.fonts.main}
    >
      {" "}
      <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
      <Flex
        flexDir={"column"}
        color="#ffffff"
        mt={isSmallerThan1024 ? "-22px" : ""}
        display={thumbIndex === 2 ? "flex" : "none"}
      >
        <Text fontSize={"28px"}>OnSla2ers</Text>
        <Text fontSize={"16px"}>Professional Valorant Team</Text>
        <Text
          fontSize={isSmallerThan1024 ? "12px" : "14px"}
          fontWeight={isSmallerThan1024 ? 300 : 400}
          fontStyle="normal"
          w={"360px"}
        >
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

  const desktopThumbItems = (
    itemsDesktop: any,
    [setThumbIndex, setThumbAnimation]: any
  ) => {
    return itemsDesktop.map((item: any, i: number) => (
      <div
        // className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
        style={{ width: "600px" }}
      >
        {item}
      </div>
    ));
  };

  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const [desktopThumbs] = useState(
    desktopThumbItems(itemsDesktop, [setThumbIndex, setThumbAnimation])
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    focusOnSelect: true
  };

  const carasoulStyles = `
   .alice-carousel__stage-item{
    margin-right: 20px;
    margin-top: -30px
    z-index:100
   }
   .alice-carousel__stage-item{
    opacity:0.3
   }
   .alice-carousel__stage-item.__target{
    opacity:1
   }
  `;

  const carasoulStylesDesktop = `
   .alice-carousel__stage-item{
    margin-right: 255px;
   
    // margin-top: -30px
    z-index:100
   }
   .alice-carousel__stage-item{
    filter: blur(20px);
    opacity: 0.5;
   }
   .alice-carousel__stage-item.__target{
    filter: drop-shadow(0px 28px 56px rgba(0, 0, 0, 0.25));
    opacity: 1;
   }
  `;
  return isSmallerThan1024 ? (
    <Flex
      w={"100%"}
      id={"info"}
      bg={"purple.0"}
      h={"645px"}
      flexDir="column"
      // justifyContent={"center"}
    >
      {" "}
      <Image
        src={DistributingSocialCapital}
        w={"253px"}
        h={"100px"}
        zIndex={100}
        mt="90px"
        ml={"14px"}
      ></Image>
      <Flex mt={"-17px"}>
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
        {/* <Flex>
          <style>{carasoulStylesDesktop}</style>
          <AliceCarousel
            items={desktopThumbs}
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
        </Flex> */}
        <Slider {...settings}>
          <Flex display={'flex'} flexDir={'row'} fontFamily={theme.fonts.main} w={"100%"}>
            {" "}
            <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
            <Flex
              flexDir={"column"}
              color="#ffffff"
              mt={isSmallerThan1024 ? "-22px" : ""}
              // display={thumbIndex === 0 ? "flex" : "none"}
            >
              <Text fontSize={"28px"}>OnSla2ers</Text>
              <Text fontSize={"16px"}>Professional Valorant Team</Text>
              <Text
                fontSize={isSmallerThan1024 ? "12px" : "14px"}
                fontWeight={isSmallerThan1024 ? 300 : 400}
                fontStyle="normal"
                w={"360px"}
              >
                OnSla2ers is a professional Valorant team competing in Valorant
                Challengers Korea. Featuring young talents, they are a team to
                keep an eye on!
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir={"row"} fontFamily={theme.fonts.main} w={"100%"}>
            {" "}
            <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
            <Flex
              flexDir={"column"}
              color="#ffffff"
              mt={isSmallerThan1024 ? "-22px" : ""}
              // display={thumbIndex === 0 ? "flex" : "none"}
            >
              <Text fontSize={"28px"}>OnSla2ers</Text>
              <Text fontSize={"16px"}>Professional Valorant Team</Text>
              <Text
                fontSize={isSmallerThan1024 ? "12px" : "14px"}
                fontWeight={isSmallerThan1024 ? 300 : 400}
                fontStyle="normal"
                w={"360px"}
              >
                OnSla2ers is a professional Valorant team competing in Valorant
                Challengers Korea. Featuring young talents, they are a team to
                keep an eye on!
              </Text>
            </Flex>
          </Flex>
          <Flex flexDir={"row"} fontFamily={theme.fonts.main} w={"100%"}>
            {" "}
            <Image src={LYDATeam} w={isSmallerThan1024 ? "296px" : "600px"} />
            <Flex
              flexDir={"column"}
              color="#ffffff"
              mt={isSmallerThan1024 ? "-22px" : ""}
              // display={thumbIndex === 0 ? "flex" : "none"}
            >
              <Text fontSize={"28px"}>OnSla2ers</Text>
              <Text fontSize={"16px"}>Professional Valorant Team</Text>
              <Text
                fontSize={isSmallerThan1024 ? "12px" : "14px"}
                fontWeight={isSmallerThan1024 ? 300 : 400}
                fontStyle="normal"
                w={"360px"}
              >
                OnSla2ers is a professional Valorant team competing in Valorant
                Challengers Korea. Featuring young talents, they are a team to
                keep an eye on!
              </Text>
            </Flex>
          </Flex>
        </Slider>
      </Flex>
    </Flex>
  );
};
