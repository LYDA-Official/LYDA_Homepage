import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bg3 from "../../assets/bg3.png";
import onther from "../../assets/onther.png";
export const PartnersLayout = () => {
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
        <Flex h={'392px'} w={'360px'} bg={'blue.500'} borderTopRightRadius={'40px'} p={'64px 27px 40px'} flexDir='column' alignItems={'center'}>
            <Image src={image} h={'104px'} w={'150px'} mb='40px'></Image>
            <Text textAlign={'center'} color='white.0' fontFamily={theme.fonts.main} fontSize='14px' fontWeight={400} lineHeight='24px'>{bio}</Text>

        </Flex>
    )
  };

  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg3}
      h="814px"
      py={"120px"}
      alignItems="center"
      color="white.0"
      fontFamily={theme.fonts.main}
      flexDir="column"
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
      <Text w="539px" fontWeight={400} fontSize="16px" mb="64px">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Exercitation veniam consequat sunt nostrud amet. Amet
      </Text>
      <Flex w='1200px' justifyContent={'space-between'}>
        {partnersList.map((partner:any)=> (
            <PartnerCard bio={partner.bio} image={partner.image}/>
        ))}
      </Flex>
    </Flex>
  );
};
