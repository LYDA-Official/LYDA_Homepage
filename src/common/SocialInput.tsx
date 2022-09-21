import * as React from "react";
import { Flex, Text, Input,useMediaQuery } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
export const SocialInput = (props: {
  title: string;
  placeHolder: string;
  setValue?: Dispatch<SetStateAction<any>>;
}) => {
  const { title, placeHolder, setValue } = props;
  const [isSmallerThan1440] = useMediaQuery("(max-width: 1440px)");

  return (
    <Flex w={isSmallerThan1440? '400px':"460px"} h={"44px"} alignItems="center" color={"blue.200"}>
      <Text w="100px" fontSize="15px" fontWeight={400} fontStyle={"normal"}>
        {title}
      </Text>
      {/* <Input w='360px' h='44px' border={'1px solid #e3e3ee'}></Input> */}
      <Input
        placeholder={placeHolder}
        border={"1px solid #e3e3ee !important"}
        outline="none"
        color={"blue.200"}
        borderRadius="4px"
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
        _placeholder={{ color: "#bcc1da", fontSize: "15px", fontWeight: 100 }}
        onChange={setValue}
      />
    </Flex>
  );
};
