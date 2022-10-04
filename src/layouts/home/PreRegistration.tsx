import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import bg from "../../assets/bg.png";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";

export const PreRegistration = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg}
      px={'14px'}
      backgroundSize={isSmallerThan1440 ? "120% 790px" : "100% 1022px"}
      h={["100%", "790px", "1022px"]}
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
          mb={["32px", "56px", "64px"]}
          color={"white.0"}
          mt={isSmallerThan1024?'56px':""}
        >
          {" "}
          <Text
            fontWeight={600}
            fontSize={isSmallerThan1024 ? "28px" : "48px"}
            mb={isSmallerThan1024 ? "16px" : "20px"}
          >
            Pre Registration
          </Text>
          <Text
            fontSize={isSmallerThan1024 ? "14px" : "16px"}
            fontWeight={400}
            w={isSmallerThan1024 ? "100%" : "539px"}
            textAlign={"center"}
          >
            Amet minim mollit non deserunt ullamco est sit aliq dolor doamet
            sint. Exercitation veniam consequat
          </Text>
        </Flex>
        <Flex
          w={"100%"}
          justifyContent={"center"}
          fontFamily={theme.fonts.main}
          flexDir={isSmallerThan1024 ? "column" : "row"}
          alignItems="center"
          mb={isSmallerThan1024? '58px':''}
        >
          <NavLink to="/register/creators">
            <Flex
              borderTopRightRadius={isSmallerThan1024 ? "80px" : ""}
              flexDir={"column"}
              h={["100%", "440px", "502px"]}
              w={["100%", "472px", "600px"]}
              pt={["33px", "114px", "160px"]}
              px={["18px", "40px", "60px"]}
              mb={isSmallerThan1024? '20px':''}
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
                fontSize={isSmallerThan1024 ? "24px" : "40px"}
                fontStyle={"normal"}
                lineHeight={isSmallerThan1024 ? "37.78px" : "63px"}
                mb={isSmallerThan1024 ? "12px" : ""}
              >
                CREATORS
              </Text>
              <Text
                fontWeight={400}
                fontSize={["12px", "15px", "16px"]}
                fontStyle={"normal"}
                lineHeight={isSmallerThan1024 ? "18.89px" : "25px"}
                mb={["20px", "40px", "56px"]}
                h={["", "120px", "100px"]}
              >
                Fuel your career by joining the LYDA Creator Coalition! Open a
                new stream of revenue via branded tokens for fans, create new
                ways to interact with your community, and reward those who
                consistently contribute. What are you waiting for?
              </Text>
              <BasicButton
                text="BTN"
                h={isSmallerThan1024 ? "42px" : "53px"}
                w={isSmallerThan1024 ? "120px" : "160px"}
                color="white.0"
                bg="transparent"
                border="2px solid #ffffff"
              />
            </Flex>
          </NavLink>

          <NavLink to="/register/fans">
            <Flex
              flexDir={"column"}
              h={["100%", "440px", "502px"]}
              w={["100%", "472px", "600px"]}
              pt={["33px", "114px", "160px"]}
              px={["18px", "40px", "60px"]}
              mb={isSmallerThan1024? '20px':''}
              bg={"blue.0"}
              borderTopRightRadius={isSmallerThan1024 ? "" : "80px"}
              color={theme.colors.blue[200]}
              _hover={{
                background:
                  "linear-gradient(139.33deg, #82FFB4 -57.9%, #07F1FF 98.53%)",
                boxShadow: "0px 16px 56px rgba(19, 90, 95, 0.75)",
              }}
            >
              <Text
                fontWeight={600}
                fontSize={isSmallerThan1024 ? "24px" : "40px"}
                fontStyle={"normal"}
                lineHeight={isSmallerThan1024 ? "37.78px" : "63px"}
                mb={isSmallerThan1024 ? "12px" : ""}
              >
                FANS
              </Text>
              <Text
                fontWeight={400}
                fontSize={["12px", "15px", "16px"]}
                fontStyle={"normal"}
                lineHeight={isSmallerThan1024 ? "18.89px" : "25px"}
                mb={["20px", "40px", "56px"]}
                h={["", "120px", "100px"]}
              >
                Enjoy exclusive rewards and community privileges all while
                supporting your favorite content creators. As token holders, get
                ready to participate in perpetuating social capital!
              </Text>
              <BasicButton
                text="BTN"
                h={"53px"}
                w={"160px"}
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
