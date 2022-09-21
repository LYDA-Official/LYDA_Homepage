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
import { Navigate, NavLink,useNavigate } from "react-router-dom";
import { BasicButton } from "../../common/BasicButton";
import saveData from "../../firebase/saveData";
import fetchData from "../../firebase/fetchData";
import schema from "../../utilities/schema";
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

export const FansForm = () => {
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

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

  ;
  const handleSubmit = (datas: any) => {
    // console.log(values,'values');
 Object.keys(datas).forEach((k, key) => {
      if (k === "benefit" || k === "support" || k === 'earning') {
        if (datas[k] === "1") {
           datas[k] = true
        }
        else {
        datas[k]= false
        }
      }
    });
    saveData({
      refKey:'fan',
      param: datas
    })
   
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
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
                        templateRows="repeat(1, 1fr)"
                      >
                        <GridItem
                          mr={isSmallerThan1440 ? "64px" : "84px"}
                          mb={"10px"}
                        >
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
                  <ListItem mb={"52px"}>
                    <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                      <Text
                        color={"blue.200"}
                        mb={"20px"}
                        fontSize="17px"
                        fontWeight={500}
                        fontStyle={"normal"}
                      >
                        Are you interested in directly supporting your favorite
                        content creators by purchasing their custom crypto
                        social token?
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
                        Would you like to benefit from exclusive digital
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
                  <ListItem mb={"52px"}>
                    <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                      <Text
                        color={"blue.200"}
                        mb={"20px"}
                        fontSize="17px"
                        fontWeight={500}
                        fontStyle={"normal"}
                      >
                        Are you interested in passively earning your favorite
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
                  <ListItem mb={"52px"}>
                    <Flex color={"blue.200"} display="flex" flexDir={"column"}>
                      <Text
                        color={"blue.200"}
                        fontSize="17px"
                        fontWeight={500}
                        fontStyle={"normal"}
                        mb={"20px"}
                      >
                        Which creator referred you to pre-register for LYDA and
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
                        What is one example of a reward you would like to earn
                        by participating in your favorite creators digital
                        social token economy?
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
                        Please provide your email for LYDA platform updates and
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
