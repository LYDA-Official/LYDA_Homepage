import { Flex, useMediaQuery } from "@chakra-ui/react";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { FansForm } from "./FansForm";
import { CreatorsForm } from "./CreatorsForm";
import { MobileCreatorsForm } from "./MobileCreatorsForm";
import { MobileFansForm } from "./MobileFansForm";
import { BasicButton } from "../../common/BasicButton";
import saveData from "../../firebase/saveData";
import fetchData from "../../firebase/fetchData";
export const FormLayout = (props: { type: string }) => {
  const { type } = props;

  const [isSmallerThan1023] = useMediaQuery("(max-width: 1023px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex
      bg={"white.100"}
      h="100%"
      w={'100%'}
      alignItems={"center"}
      pt={isSmallerThan1023 ? "40px" : "80px"}
      flexDir="column"
      px={["14px", "40px", ""]}
    >
      {isSmallerThan1023 ? (
        type === "fans" ? (
          <MobileFansForm />
        ) : (
          <MobileCreatorsForm />
        )
      ) : type === "fans" ? (
        <FansForm />
      ) : (
        <CreatorsForm />
      )}
    </Flex>
  );
};
