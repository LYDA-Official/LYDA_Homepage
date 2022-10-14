import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  Field,
} from "formik";
export const SocialInput = (props: {
  title: string;
  placeHolder: string;
  setValue?: Dispatch<SetStateAction<any>>;
}) => {
  const { title, placeHolder } = props;
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      w={["100%"]}
      // h={"54px"}
      alignItems="center"
      color={"blue.200"}
     
    >
      <Text
        w={ "90px"}
        fontSize={isSmallerThan1024 ? "12px" : "15px"}
        fontWeight={400}
        fontStyle={"normal"}
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Text>
      <Field
        style={{
          width: "100%",
          height:isSmallerThan1024? "38px": '44px',
          border: "1px solid #e3e3ee",
          borderRadius: "4px",
          paddingLeft: "20px",
          outline: "none",
          color: "#060B22",
          fontWeight: "400",
          background: "#FFFFFF",
          fontSize: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: isSmallerThan1024?'6px': '10px'
        }}
        name={title}
        placeholder={placeHolder}
      ></Field>
    </Flex>
  );
};
