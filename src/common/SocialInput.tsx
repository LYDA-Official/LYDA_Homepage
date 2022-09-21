import * as React from "react";
import { Flex, Text, Input,useMediaQuery } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage
} from "formik";
export const SocialInput = (props: {
  title: string;
  placeHolder: string;
  setValue?: Dispatch<SetStateAction<any>>;
}) => {
  const { title, placeHolder, setValue } = props;
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

  return (
    <Flex w={isSmallerThan1440? '400px':"460px"} h={"54px"} alignItems="center" color={"blue.200"}>
      <Text w="100px" fontSize="15px" fontWeight={400} fontStyle={"normal"}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Text>
      < Field style={{  width: '300px',
          height: '44px',
          border: '1px solid #e3e3ee',
          borderRadius: '4px',
          paddingLeft: '20px',
          outline:'none',
          color:'#060B22',
          fontWeight:'400',
          fontSize:'15px',
          display:'flex',
          justfiyContent:'center',
          alignItems:'center'
          
          }} name={title} placeholder={placeHolder} ></Field>
          
    </Flex>
  );
};
