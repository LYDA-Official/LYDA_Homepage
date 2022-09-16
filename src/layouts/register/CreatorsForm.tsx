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
} from "@chakra-ui/react";
import theme from "../../theme";
import { useState } from "react";
import { SocialInput } from "../../common/SocialInput";
export const CreatorsForm = () => {
  const [twitter, setTwitter] = useState("");
  const [twitch, setTwitch] = useState("");
  const [discord, setDiscord] = useState("");
  const [facebook, setFacebook] = useState("");
  const [q2value, setQ2value] = useState("1");
  const [q3value, setQ3value] = useState("1");

  const radioStyle = `
  .css-125znku[aria-checked=true], .css-125znku[data-checked] {
    background: #4361ee;
    color: white;
  }
  .css-125znku[aria-checked=true]:hover, .css-125znku[data-checked]:hover {
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
      w="1100px"
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
              templateRows="repeat(4, 1fr)"
            >
              <GridItem mr={"84px"} mb={"10px"}>
                <SocialInput
                  title="Twitter"
                  placeHolder="Twitter URL"
                  setValue={setTwitter}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="Facebook"
                  placeHolder="Facebook URL"
                  setValue={setFacebook}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="Twitch"
                  placeHolder="Twitch ULR"
                  setValue={setTwitch}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="YouTube"
                  placeHolder="YouTube URL"
                  setValue={setFacebook}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="Discord"
                  placeHolder="Discord URL"
                  setValue={setFacebook}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="Website"
                  placeHolder="Website URL"
                  setValue={setFacebook}
                />
              </GridItem>
              <GridItem>
                <SocialInput
                  title="Other"
                  placeHolder="Other"
                  setValue={setFacebook}
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
              Are you interested in receiving financial support from your fans
              via the sale of your own personal crypto social token?
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
              Are you willing to make content and complete activations that will
              leverage said crypto token?
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
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
            >
              Please provide at least one example of content that could leverage
              your LYDA platform creator token.
            </Text>
            <Text mb={"20px"}>
              {" "}
              (This can be theoretical new content, or tie into content you’re
              already producing.)
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
        <ListItem>
          <Flex color={"blue.200"} display="flex" flexDir={"column"}>
            <Text
              color={"blue.200"}
              fontSize="17px"
              fontWeight={500}
              fontStyle={"normal"}
              mb={"20px"}
            >
              Please provide your email to receive updates on your acceptance
              into the LYDA Creator Coalition.
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
