import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";

export const RegisterHeaderLayout = (props: {
  image: any;
  height: string;
  width: string;
  title: string;
}) => {
  const { image, height, width, title } = props;
  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");

  return (
    <Flex
      h={isSmallerThan1023? '240px':"400px"}
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      backgroundImage={bgSubPage}
      alignItems="center"
      backgroundSize={"100% 400px"}
      flexDir="column"
      px={'50px'}
      blendMode="color-dodge"
    >
      <Image
        mt={isSmallerThan1023? '90px':"200px"}
        src={image}
        h={height}
        maxW={width}
        mb={isSmallerThan1023 ? "8px" : "25.6px"}
      />
      <Text
      w={'100%'}
        fontFamily={theme.fonts.main}
        textAlign='center'
        color={"white.0"}
        fontSize={["14px", "18px", "18px"]}
      >
        {title}
      </Text>
    </Flex>
  );
};
