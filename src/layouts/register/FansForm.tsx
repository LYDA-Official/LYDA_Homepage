import * as React from "react";
import {
  Flex,
  ListItem,
  OrderedList,
  Text,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Textarea,
  useMediaQuery
} from "@chakra-ui/react";
import theme from "../../theme";
import { useState } from "react";
import { SocialInput } from "../../common/SocialInput";

export const FansForm = () => {
  const [twitter, setTwitter] = useState("");
  const [twitch, setTwitch] = useState("");
  const [discord, setDiscord] = useState("");
  const [facebook, setFacebook] = useState("");
  const [q2value, setQ2value] = useState("1");
  const [q3value, setQ3value] = useState("1");
  const [q4value, setQ4value] = useState("1");
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

  const radioStyle = `
  .css-xnto68[aria-checked=true], .css-xnto68[data-checked] {
    background: #4361ee;
    color: white;
  }
  .css-125znku[aria-checked=true], .css-125znku[data-checked] {
    background: #4361ee;
    color: white;
  }
   .css-125znku[aria-checked=true], .css-125znku[data-checked]:hover {
    background: #4361ee;
    color: white;
  }
  .css-x9juev>*:not(style)~*:not(style) {
    margin-left: 44px
  }
  `;
  return (
    <Flex
      bg={"white.0"}
      flexDir={"column"}
      w={isSmallerThan1440?'944px' :"1100px"}
      borderTopRightRadius={"80px"}
      p={"48px"}
      fontFamily={theme.fonts.main}
      mb={"48px"}
    >
      <OrderedList m={"0px"}>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              mb={"20px"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
            >
              First and foremost, please provide LYDA with links to your
              associated social media:
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(1, 1fr)"
            >
              <GridItem mr={isSmallerThan1440?'64px' :"84px"} mb={"10px"}>
                <SocialInput
                  title="Twitter"
                  placeHolder="Twitter URL"
                  setValue={setTwitter}
                />
              </GridItem>

              <GridItem>
                <SocialInput
                  title="Discord"
                  placeHolder="Discord URL"
                  setValue={setDiscord}
                />
              </GridItem>
            </Grid>
          </Flex>
        </ListItem>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              mb={"20px"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
            >
              Are you interested in directly supporting your favorite content
              creators by purchasing their custom crypto social token?
            </Text>
            <style>{radioStyle}</style>
            <RadioGroup onChange={setQ2value} value={q2value} color={"#"}>
              <Stack direction="row">
                <Radio border={"1px solid #e3e3ee !important"} value={"1"}>
                  Yes
                </Radio>
                <Radio
                  border={"1px solid #e3e3ee !important"}
                  ml={"44px"}
                  value={"0"}
                >
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </ListItem>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              mb={"20px"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
            >
              Would you like to benefit from exclusive digital rewards, only
              accessible by being a social token holder?
            </Text>
            <style>{radioStyle}</style>
            <RadioGroup onChange={setQ3value} value={q3value} color={"#"}>
              <Stack direction="row">
                <Radio border={"1px solid #e3e3ee !important"} value={"1"}>
                  Yes
                </Radio>
                <Radio
                  border={"1px solid #e3e3ee !important"}
                  ml={"44px"}
                  value={"0"}
                >
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </ListItem>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              mb={"20px"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
            >
              Are you interested in passively earning your favorite creators
              social token by participating in their Discord community?
            </Text>
            <style>{radioStyle}</style>
            <RadioGroup onChange={setQ4value} value={q4value} color={"#"}>
              <Stack direction="row">
                <Radio border={"1px solid #e3e3ee !important"} value={"1"}>
                  Yes
                </Radio>
                <Radio
                  border={"1px solid #e3e3ee !important"}
                  ml={"44px"}
                  value={"0"}
                >
                  No
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </ListItem>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
              mb={"20px"}
            >
              Which creator referred you to pre-register for LYDA and their
              upcoming creator social tokens?
            </Text>

            <Textarea
              p={"11px 20px"}
              border={"1px solid #e3e3ee !important"}
              outline="none"
              color={"blue.200"}
              borderRadius="4px"
              fontSize={"14px"}
              minHeight="70px"
              h={"70px"}
              _active={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              _focus={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              fontWeight={100}
              _placeholder={{
                color: "#bcc1da",
                fontSize: "15px",
                fontWeight: 100,
              }}
            />
          </Flex>
        </ListItem>
        <ListItem mb={"52px"}>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
              mb={"20px"}
            >
              What is one example of a reward you would like to earn by
              participating in your favorite creators digital social token
              economy?
            </Text>

            <Input
              p={"11px 20px"}
              border={"1px solid #e3e3ee !important"}
              outline="none"
              color={"blue.200"}
              borderRadius="4px"
              type="email"
              fontSize={"14px"}
              minHeight="70px"
              h={"70px"}
              _active={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              _focus={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              fontWeight={100}
              _placeholder={{
                color: "#bcc1da",
                fontSize: "15px",
                fontWeight: 100,
              }}
            />
          </Flex>
        </ListItem>
        <ListItem>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
              mb={"20px"}
            >
              Please provide your email for LYDA platform updates and
              information on when you’re eligible to redeem your
              pre-registration rewards.
            </Text>

            <Input
              p={"11px 20px"}
              border={"1px solid #e3e3ee !important"}
              outline="none"
              color={"blue.200"}
              borderRadius="4px"
              type="email"
              fontSize={"14px"}
              minHeight="70px"
              h={"70px"}
              _active={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              _focus={{
                outline: "none",
                border: "1px solid #e3e3ee !important",
                boxShadow: "none",
              }}
              fontWeight={100}
              _placeholder={{
                color: "#bcc1da",
                fontSize: "15px",
                fontWeight: 100,
              }}
            />
          </Flex>
        </ListItem>
      </OrderedList>
    </Flex>
  );
};
