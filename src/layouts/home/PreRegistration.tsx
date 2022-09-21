import { Flex, Text,useMediaQuery } from "@chakra-ui/react";
import { NavLink, useMatch } from "react-router-dom";
import bg from "../../assets/bg.png";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";

export const PreRegistration = () => {
 
const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");
// const [isSmallerThan1240] = useMediaQuery("(max-width: 1240px)");

  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg}
      backgroundSize={isSmallerThan1440 ? "120% 790px" : "100% 1022px"}
      h={isSmallerThan1440 ? "790px" : "1022px"}
      justifyContent={"center"}
      id="pre-registration"
    >
      <Flex
        {...theme.LAYOUT_STYLE.layoutStyle()}
        fontFamily={theme.fonts.main}
        flexDir={"column"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          fontFamily={theme.fonts.main}
          fontStyle={"normal"}
          flexDir={"column"}
          mb={isSmallerThan1440?'56px': "64px"}
          color={"white.0"}
        >
          {" "}
          <Text fontWeight={600} fontSize={"48px"} mb={"20px"}>
            Pre Registration
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight={400}
            w={"539px"}
            textAlign={"center"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Exercitation veniam consequat sunt nostrud amet. Amet
          </Text>
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          fontFamily={theme.fonts.main}
        >
          <NavLink to="/register/creators">
            <Flex
              flexDir={"column"}
              h={isSmallerThan1440? '440px':"502px"}
              w={isSmallerThan1440?'472px': "600px"}
              pt={isSmallerThan1440? '114px' :"160px"}
              px={isSmallerThan1440? '40px':"60px"}
              _hover={{
                background:
                  "linear-gradient(134.5deg, #55C2FF -23.18%, #4361EE 94.24%)",
                boxShadow: "0px 16px 56px rgba(3, 23, 115, 0.75)",
              }}
              bg={"purple.0"}
              color={"white.0"}
            >
              <Text
                fontWeight={600}
                fontSize={"40px"}
                fontStyle={"normal"}
                lineHeight={"63px"}
              >
                CREATORS
              </Text>
              <Text
                fontWeight={400}
                fontSize={isSmallerThan1440? '15px':"16px"}
                fontStyle={"normal"}
                lineHeight={"25px"}
                mb={isSmallerThan1440? '40px': "56px"}
                h={isSmallerThan1440? '120px':"100px"}
              >
                Fuel your career by joining the LYDA Creator Coalition! Open a
                new stream of revenue via branded tokens for fans, create new
                ways to interact with your community, and reward those who
                consistently contribute. What are you waiting for?
              </Text>
              <BasicButton
                text="BTN"
                h={'53px'}
                w={'160px'}
                color="white.0"
                bg="transparent"
                border="2px solid #ffffff"
              />
            </Flex>
          </NavLink>

          <NavLink to="/register/fans">
            <Flex
               h={isSmallerThan1440? '440px':"502px"}
               w={isSmallerThan1440?'472px': "600px"}
               pt={isSmallerThan1440? '114px' :"160px"}
               px={isSmallerThan1440? '40px':"60px"}
              flexDir={"column"}
              bg={"blue.0"}
              borderTopRightRadius={"80px"}
              color={theme.colors.blue[200]}
              _hover={{
                background:
                  "linear-gradient(139.33deg, #82FFB4 -57.9%, #07F1FF 98.53%)",
                boxShadow: "0px 16px 56px rgba(19, 90, 95, 0.75)",
              }}
            >
              <Text
                fontWeight={600}
                fontSize={"40px"}
                fontStyle={"normal"}
                lineHeight={"63px"}
              >
                FANS
              </Text>
              <Text
                fontWeight={400}
                fontSize={isSmallerThan1440? '15px':"16px"}
                h={isSmallerThan1440? '120px':"100px"}
                fontStyle={"normal"}
                lineHeight={"25px"}
                mb={isSmallerThan1440? '40px': "56px"}
              >
                Enjoy exclusive rewards and community privileges all while
                supporting your favorite content creators. As token holders, get
                ready to participate in perpetuating social capital!
              </Text>
              <BasicButton
                text="BTN"
                h={'53px'}
                w={'160px'}
                color="blue.200"
                bg="transparent"
                border="2px solid #060B22"
              />
            </Flex>
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
