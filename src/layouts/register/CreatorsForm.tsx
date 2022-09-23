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
  useMediaQuery,
  Button,
  FormControl,
} from "@chakra-ui/react";
import theme from "../../theme";
import { useState } from "react";
import { SocialInput } from "../../common/SocialInput";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { BasicButton } from "../../common/BasicButton";
import saveData from "../../firebase/saveData";
import fetchData from "../../firebase/fetchData";
import creatorsSchema from "../../utilities/creatorsSchema";
type CreatorsInput = {
  twitter: string;
  facebook: string;
  twitch: string;
  youTube: string;
  discord: string;
  website: string;
  other: string;
  support: string;
  willing: string;
  example: string;
  email: string;
};

export const CreatorsForm = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");
  const socialInputs = ['twitter', 'facebook', 'twitch', 'youTube', 'discord', 'website', 'other']
  const initialValues: CreatorsInput = {
    twitter: "",
    facebook: "",
    twitch: "",
    youTube: "",
    discord: "",
    website: "",
    other: "",
    support: "",
    willing: "",
    example: "",
    email: "",
  };

  const handleSubmit = (datas: any) => {
    // console.log(values,'values');
    Object.keys(datas).forEach((k, key) => {
      if (k === "willing" || k === "support" ) {
        if (datas[k] === "1") {
          datas[k] = true;
        } else {
          datas[k] = false;
        }
      }
    });
    saveData({
      refKey: "creator",
      param: datas,
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={creatorsSchema}
      validateOnMount={true}
      onSubmit={async (data, { setSubmitting }) => {
        // setSubmitting(true);
        // setSubmitting(false);
      }}
    >
      {({ errors, touched, values }) => {
        return (
          <Form>
            <Flex w={isSmallerThan1440 ? "944px" : "1100px"} flexDir="column">
              <Flex
                bg={"white.0"}
                flexDir={"column"}
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
                        First and foremost, please provide LYDA with links to
                        your associated social media:
                      </Text>
                      <Grid
                        templateColumns="repeat(2, 1fr)"
                        templateRows="repeat(4, 1fr)"
                      >
                        {socialInputs.map((item:any, index:number) =>  {
                            return (
                              <GridItem
                              key={index}
                              mr={isSmallerThan1440 ? "64px" : "84px"}
                              mb={"10px"}
                            >
                              <SocialInput
                                title={item}
                                placeHolder={`${item.charAt(0).toUpperCase() + item.slice(1)} URL`}
                              />
    
                              <ErrorMessage
                                name={item}
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
                            )
                                  })
                        }
                    
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
                        Are you interested in receiving financial support from your fans via the sale of your own personal crypto social token?
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
                  <ListItem mb={"52px"}>
                    <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                      <Text
                        color={"blue.200"}
                        mb={"20px"}
                        fontSize="17px"
                        fontWeight={500}
                        fontStyle={"normal"}
                      >
                       Are you willing to make content and complete activations that will leverage said crypto token?
                      </Text>
                      <Flex>
                        <label>
                          <Field
                            type="radio"
                            name="willing"
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
                            name="willing"
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
                        name="willing"
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
                
                  <ListItem mb={"52px"}>
                    <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                      <Text
                        color={"blue.200"}
                        fontSize="17px"
                        fontWeight={500}
                        fontStyle={"normal"}
                        mb={"20px"}
                      >
                       Please provide at least one example of content that could leverage your LYDA platform creator token.
(This can be theoretical new content, or tie into content you’re already producing.)
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
                      Please provide your email to receive updates on your acceptance into the LYDA Creator Coalition. 
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
                </OrderedList>
              </Flex>
              <Flex
                w={isSmallerThan1440 ? "944px" : "1100px"}
                justifyContent={"space-between"}
                mb={isSmallerThan1440 ? "88px" : "259px"}
              >
                <NavLink to={"/"}>
                  <BasicButton
                    text="Back"
                    color="blue.200"
                    bg="blue.0"
                    h={"53px"}
                    w={"170px"}
                  />
                </NavLink>
                <Button
                  _hover={{ cursor: "pointer", textDecoration: "none" }}
                  type="submit"
                  _active={{}}
                  fontSize={"16px"}
                  color="white.0"
                  bg="purple.0"
                  h={"53px"}
                  w={"170px"}
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
