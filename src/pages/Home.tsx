import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { Intro } from "../layouts/home/Intro";
import { WhatIsLyda } from "../layouts/home/WhatIsLyda";
import { SeeForYourself } from "../layouts/home/SeeForYourself";
import { PreRegistration } from "../layouts/home/PreRegistration";
import { Roadmap } from "../layouts/home/Roadmap";

export const Home = () => {
  return (
    <Flex
      flexDir={"column"}
    
    >
      
      <Intro />
      <WhatIsLyda />
      <Roadmap />
      <SeeForYourself />
      <PreRegistration />
    </Flex>
  );
};
