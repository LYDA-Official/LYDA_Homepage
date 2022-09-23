import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import onther from "../../assets/onther.png";
import ontherTablet from "../../assets/ontherTablet.png";
export const PartnersLayout = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

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
        h={"392px"}
        w={"360px"}
        bg={"blue.500"}
        borderTopRightRadius={"40px"}
        p={"64px 27px 40px"}
        flexDir="column"
        alignItems={"center"}
        zIndex={100}
      >
        <Image src={image} h={"104px"} w={"150px"} mb="40px"></Image>
        <Text
          textAlign={"center"}
          color="white.0"
          fontFamily={theme.fonts.main}
          fontSize="14px"
          fontWeight={400}
          lineHeight="24px"
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
        w={"944px"}
        h={"152px"}
        zIndex={100}
        bg={"blue.500"}
        borderTopRightRadius={"40px"}
        mb="24px"
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Image src={ontherTablet} w="200px" h="33.6px" />
        <Text w='600px' fontSize={'14px'} fontWeight={400}>
        {bio}
        </Text>
      </Flex>
    );
  };
  return (
    <Flex
      bg={"blue.400"}
      h={isSmallerThan1440 ? "854px" : "814px"}
      alignItems="center"
      color="white.0"
      fontFamily={theme.fonts.main}
      flexDir="column"
    >
      <Flex position={"absolute"} width="100%" height={'inherit'}>
        <Image src={isSmallerThan1440 ? bg4 : bg3} width="100%" height={'100%'}></Image>
      </Flex>
      <Flex
        position={"relative"}
        flexDir="column"
        alignItems={"center"}
        justifyContent="center"
        h="100%"
      >
        <Text
          fontWeight={600}
          fontSize="48px"
          lineHeight={"48px"}
          fontStyle="normal"
          mb="20px"
        >
          Partners
        </Text>
        <Text
          w={isSmallerThan1440 ? "100%" : "539px"}
          fontWeight={400}
          fontSize="16px"
          mb="64px"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Exercitation veniam consequat sunt nostrud amet. Amet
        </Text>
      </Flex>
      {isSmallerThan1440 ? (
        <Flex
          flexDir={"column"}
          alignContent="space-between"
          h={"504px"}
          mb="64px"
        >
          {partnersList.map((partner: any, index:number) => (
            <PartnerCardTablet bio={partner.bio} image={partner.image} key={index}/>
          ))}
        </Flex>
      ) : (
        <Flex
          w={isSmallerThan1440 ? "100%" : "1200px"}
          justifyContent={"space-between"}
          mb='120px'
        >
          {partnersList.map((partner: any, index:number) => (
            <PartnerCard bio={partner.bio} image={partner.image} key={index} />
          ))}
        </Flex>
      )}
      {/* <Text
        fontWeight={600}
        fontSize="48px"
        lineHeight={"48px"}
        fontStyle="normal"
        mb="20px"
      >
        Partners
      </Text>
      <Text w={isSmallerThan1440? '100%':"539px"} fontWeight={400} fontSize="16px" mb="64px">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Exercitation veniam consequat sunt nostrud amet. Amet
      </Text>
      <Flex w={isSmallerThan1440? '100%':'1200px'} justifyContent={'space-between'} flexDir={isSmallerThan1440?'column':'row'}>
        {partnersList.map((partner:any)=> (
            <PartnerCard bio={partner.bio} image={partner.image}/>
        ))}
      </Flex> */}
    </Flex>
  );
};
