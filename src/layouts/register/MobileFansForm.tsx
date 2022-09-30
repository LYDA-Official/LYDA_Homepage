import * as React from "react";
import {
  Flex,
  List,
  ListItem,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import theme from "../../theme";
import { SocialInput } from "../../common/SocialInput";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BasicButton } from "../../common/BasicButton";
import saveData from "../../firebase/saveData";
import fetchData from "../../firebase/fetchData";
import fansSchema from "../../util../../utilities/fansSchema";
type FansInput = {
  twitter: string;
  discord: string;
  support: string;
  benefit: string;
  earning: string;
  creator: string;
  example: string;
  email: string;
};

export const MobileFansForm = () => {
  const socialInputs = [
    "twitter",
    "facebook",
    "twitch",
    "youTube",
    "discord",
    "website",
    "other",
  ];
  const initialValues: FansInput = {
    twitter: "",
    discord: "",
    support: "",
    benefit: "",
    earning: "",
    creator: "",
    example: "",
    email: "",
  };

  const handleSubmit = (datas: any) => {
    // console.log(values,'values');
    Object.keys(datas).forEach((k, key) => {
      if (k === "benefit" || k === "support" || k === "earning") {
        if (datas[k] === "1") {
          datas[k] = true;
        } else {
          datas[k] = false;
        }
      }
    });
    saveData({
      refKey: "fan",
      param: datas,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={fansSchema}
      validateOnMount={true}
      onSubmit={async (data, { setSubmitting }) => {
        // setSubmitting(true);
        // setSubmitting(false);
      }}
    >
      {({ errors, touched, values }) => {
        return (
          <Form>
            <Flex
              w={'100%'}
              flexDir="column"
              fontFamily={theme.fonts.main}
              bg="#f4f4ff"
            >
              <List fontSize="14px" color={"blue.200"}>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      mb={"20px"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                    >
                      1. First and foremost, please provide LYDA with links to
                      your associated social media:
                    </Text>
                    <Grid templateColumns="repeat(1, 1fr)">
                      <GridItem mb={"6px"}>
                        <SocialInput
                          title="twitter"
                          placeHolder="Twitter URL"
                        />

                        <ErrorMessage
                          name="twitter"
                          render={() => (
                            <div
                              style={{
                                color: "red",
                                fontSize: "12px",
                                verticalAlign: "center",
                              }}
                            >
                              * Invalid URL
                            </div>
                          )}
                        />
                      </GridItem>

                      <GridItem>
                        <SocialInput
                          title="discord"
                          placeHolder="Discord URL"
                        />
                        <ErrorMessage
                          name="discord"
                          render={() => (
                            <div
                              style={{
                                color: "red",
                                fontSize: "12px",
                                verticalAlign: "center",
                              }}
                            >
                              * Invalid URL
                            </div>
                          )}
                        />
                      </GridItem>
                    </Grid>
                  </Flex>
                </ListItem>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      mb={"20px"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                    >
                      2. Are you interested in directly supporting your favorite
                      content creators by purchasing their custom crypto social
                      token?
                    </Text>

                    <Flex>
                      <label>
                        <Field
                          type="radio"
                          name="support"
                          value="1"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        Yes
                      </label>
                      <label style={{ marginLeft: "44px" }}>
                        <Field
                          type="radio"
                          name="support"
                          value="2"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        No
                      </label>
                    </Flex>
                    <ErrorMessage
                      name="support"
                      render={() => (
                        <div
                          style={{
                            color: "red",
                            fontSize: "12px",
                            verticalAlign: "center",
                          }}
                        >
                          * Required
                        </div>
                      )}
                    />
                  </Flex>
                </ListItem>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      mb={"20px"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                    >
                      3. Would you like to benefit from exclusive digital
                      rewards, only accessible by being a social token holder?
                    </Text>
                    <Flex>
                      <label>
                        <Field
                          type="radio"
                          name="benefit"
                          value="1"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        Yes
                      </label>
                      <label style={{ marginLeft: "44px" }}>
                        <Field
                          type="radio"
                          name="benefit"
                          value="2"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        No
                      </label>
                    </Flex>
                    <ErrorMessage
                      name="benefit"
                      render={() => (
                        <div
                          style={{
                            color: "red",
                            fontSize: "12px",
                            verticalAlign: "center",
                          }}
                        >
                          * Required
                        </div>
                      )}
                    />
                  </Flex>
                </ListItem>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      mb={"20px"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                    >
                      4. Are you interested in passively earning your favorite
                      creators social token by participating in their Discord
                      community?
                    </Text>
                    <Flex>
                      <label>
                        <Field
                          type="radio"
                          name="earning"
                          value="1"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        Yes
                      </label>
                      <label style={{ marginLeft: "44px" }}>
                        <Field
                          type="radio"
                          name="earning"
                          value="2"
                          style={{
                            marginRight: "16px",
                            accentColor: "#4361EE",
                          }}
                        />
                        No
                      </label>
                    </Flex>
                    <ErrorMessage
                      name="earning"
                      render={() => (
                        <div
                          style={{
                            color: "red",
                            fontSize: "12px",
                            verticalAlign: "center",
                          }}
                        >
                          * Required
                        </div>
                      )}
                    />
                  </Flex>
                </ListItem>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                      mb={"20px"}
                    >
                      5. Which creator referred you to pre-register for LYDA and
                      their upcoming creator social tokens?
                    </Text>
                    <Field
                      name="creator"
                      type="text-area"
                      style={{
                        padding: "11px 20px",
                        border: "1px solid #e3e3ee",
                        minHeight: "70px",
                        borderRadius: "4px",
                        outline: "none",
                        color: "#060B22",
                        fontSize: "15px",
                        fontWeight: "400",
                        background: "#FFFFFF",
                      }}
                    />
                  </Flex>
                </ListItem>
                <ListItem mb={"40px"}>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                      mb={"20px"}
                    >
                      6. What is one example of a reward you would like to earn
                      by participating in your favorite creators digital social
                      token economy?
                    </Text>

                    <Field
                      name="example"
                      type="text-area"
                      style={{
                        padding: "11px 20px",
                        border: "1px solid #e3e3ee",
                        minHeight: "70px",
                        borderRadius: "4px",
                        outline: "none",
                        color: "#060B22",
                        fontSize: "15px",
                        fontWeight: "400",
                        background: "#FFFFFF",
                      }}
                    />
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                    <Text
                      color={"blue.200"}
                      fontSize="14px"
                      fontWeight={500}
                      fontStyle={"normal"}
                      mb={"20px"}
                    >
                      7. Please provide your email for LYDA platform updates and
                      information on when you’re eligible to redeem your
                      pre-registration rewards.
                    </Text>

                    <Field
                      name="email"
                      type="email"
                      style={{
                        padding: "11px 20px",
                        border: "1px solid #e3e3ee",
                        minHeight: "70px",
                        borderRadius: "4px",
                        outline: "none",
                        color: "#060B22",
                        fontSize: "15px",
                        fontWeight: "400",
                        background: "#FFFFFF",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      render={() => (
                        <div
                          style={{
                            color: "red",
                            fontSize: "12px",
                            verticalAlign: "center",
                          }}
                        >
                          * invalid email
                        </div>
                      )}
                    />
                  </Flex>
                </ListItem>
              </List>
              <Flex
              
                justifyContent={"space-between"}
                mb={"56px"}
                mt={"32px"}
              >
                <NavLink to={"/"}>
                  <BasicButton
                    text="Back"
                    color="blue.200"
                    bg="blue.0"
                    h={"48px"}
                    w={"160px"}
                  />
                </NavLink>
                <Button
                  _hover={{ cursor: "pointer", textDecoration: "none" }}
                  type="submit"
                  _active={{}}
                  fontSize={"16px"}
                  color="white.0"
                  bg="purple.0"
                  h={"48px"}
                  w={"160px"}
                  borderRadius={0}
                  borderTopRightRadius={"20px"}
                  fontWeight={500}
                  disabled={Object.keys(errors).length !== 0}
                  _disabled={{ bg: "#C4C6CE", color: "white.0" }}
                  onClick={() => handleSubmit(values)}
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
