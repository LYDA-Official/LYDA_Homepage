import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import onther from "../../assets/onther.png";
import ontherTablet from "../../assets/ontherTablet.png";
export const PartnersLayout = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  const partnersList = [
    {
      bio: "Bio: Onther, standing for “On Ethereum,” is an Ethereum Layer-2 blockchain research and development company. Onther utilizes the Tokamak Network to launch new projects via it’s TONstarter platform in an effort to easily build trustless blockchain applications. ",
      image: onther,
    },
    {
      bio: "Bio: Onther, standing for “On Ethereum,” is an Ethereum Layer-2 blockchain research and development company. Onther utilizes the Tokamak Network to launch new projects via it’s TONstarter platform in an effort to easily build trustless blockchain applications. ",
      image: onther,
    },
    {
      bio: "Bio: Onther, standing for “On Ethereum,” is an Ethereum Layer-2 blockchain research and development company. Onther utilizes the Tokamak Network to launch new projects via it’s TONstarter platform in an effort to easily build trustless blockchain applications. ",
      image: onther,
    },
  ];

  const PartnerCard = (props: { bio: string; image: any }) => {
    const { bio, image } = props;

    return (
      <Flex
      
        h={isSmallerThan1024 ? "100%" : "392px"}
        w={isSmallerThan1024 ? "100%" : "360px"}
        bg={"blue.500"}
        borderTopRightRadius={"40px"}
        p={isSmallerThan1024 ? "32px 20px 24px" : "64px 27px 40px"}
        flexDir="column"
        alignItems={"center"}
        zIndex={100}
        mb={isSmallerThan1024 ? "24px" : ""}
      >
        <Image
          src={image}
          h={isSmallerThan1024 ? "80px" : "104px"}
          w={isSmallerThan1024 ? "115.38px" : "150px"}
          mb={isSmallerThan1024 ? "24px" : "40px"}
        ></Image>
        <Text
          textAlign={"center"}
          color="white.0"
          fontFamily={theme.fonts.main}
          fontSize={isSmallerThan1024 ? "12px" : "14px"}
          fontWeight={400}
          lineHeight={isSmallerThan1024 ? "18.89px" : "24px"}
        >
          {bio}
        </Text>
      </Flex>
    );
  };

  const PartnerCardTablet = (props: { bio: string; image: any }) => {
    const { bio, image } = props;
    return (
      <Flex
        w={"100%"}
        h={"152px"}
        zIndex={100}
        bg={"blue.500"}
        borderTopRightRadius={"40px"}
        mb="24px"
        alignItems={"center"}
        justifyContent={"space-around"}
        px={['14px', '40px','']}
      >
        <Image src={ontherTablet} w="200px" h="33.6px" />
        <Text w="100%" fontSize={"14px"} ml={'40px'} fontWeight={400}>
          {bio}
        </Text>
      </Flex>
    );
  };


  return (
    <Flex
      bg={"blue.400"}
      h={["", "854px", "814px"]}
      alignItems="center"
      color="white.0"
      fontFamily={theme.fonts.main}
      flexDir="column"
      px={"14px"}
    >
      <Flex position={"absolute"} width="100%" height={"inherit"}>
        <Image
          src={isSmallerThan1440 ? bg4 : bg3}
          width="100%"
          height={isSmallerThan1024 ? "100%" : "100%"}
        ></Image>
      </Flex>
      <Flex
        position={"relative"}
        flexDir="column"
        alignItems={"center"}
        justifyContent="center"
        h="100%"
        mt={["56px", "88px", "120px"]}
      >
        <Text
          fontWeight={600}
          fontSize={isSmallerThan1024 ? "28px" : "48px"}
          lineHeight={isSmallerThan1024 ? "44.07px" : "48px"}
          fontStyle="normal"
          mb={isSmallerThan1024 ? "16px" : "20px"}
        >
          Partners
        </Text>
        <Text
          w={ "100%"}
          fontWeight={400}
          fontSize={isSmallerThan1024 ? "14px" : "16px"}
          mb={isSmallerThan1024 ? "32px" : "64px"}
          textAlign={"center"}
        >
          Amet minim mollit non deserunt ullamco est sit aliq dolor doamet sint.
          Exercitation veniam consequat
        </Text>
      </Flex>
      {isSmallerThan1024 ? (
        <Flex w={"100%"} alignItems={"center"} mb="56px" flexDir={"column"}>
          {partnersList.map((partner: any, index: number) => (
            <PartnerCard bio={partner.bio} image={partner.image} key={index} />
          ))}
        </Flex>
      ) : isSmallerThan1440 ? (
        <Flex
          flexDir={"column"}
          alignContent="space-between"
          h={"504px"}
          mb="88px"
        >
          {partnersList.map((partner: any, index: number) => (
            <PartnerCardTablet
              bio={partner.bio}
              image={partner.image}
              key={index}
            />
          ))}
        </Flex>
      ) : (
        <Flex
          w={isSmallerThan1440 ? "100%" : "1200px"}
          justifyContent={"space-between"}
          mb={"120px"}
        >
          {partnersList.map((partner: any, index: number) => (
            <PartnerCard bio={partner.bio} image={partner.image} key={index} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};
