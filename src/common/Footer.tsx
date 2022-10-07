import {
 
  Flex,
  Image,
  Text,
  Link,
  useMediaQuery
  // Tooltip,
} from "@chakra-ui/react";
import React from "react";
import theme from "../theme/index";
import Discord from "../assets/icons/Discord.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Telegram from "../assets/icons/Telegram.svg";

export const Footer: React.FC = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  const socialLinks = [
    {
      title: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/Lyda_official",
    },
    {
      title: "Telegram",
      icon: Telegram,
      href: "https://t.me/lyda_official",
    },
    {
      title: "Discord",
      icon: Discord,
      href: "https://twitter.com/Lyda_official",
    },
  ];
  return (
    <Flex
      maxW={"full"}
      bg={theme.colors.blue[200]}
      h={isSmallerThan1024? '100px':"80px"}
      justifyContent={isSmallerThan1024? 'center':"space-between"}
      px={"32px"}
      flexDir={isSmallerThan1024? 'column':'row'}
      alignItems={"center"}
      fontFamily={theme.fonts.main}
      fontWeight={500}
      color={'white.0'}
      zIndex={100}

    >
      <Text fontSize={isSmallerThan1024?'12px':"14px"} fontWeight={300} mb={isSmallerThan1024?'12px':''}>
        Copyrightⓒ2022 <span style={{ fontWeight: 500 }}>LYDA</span>. All rights
        reserved.
      </Text>
      <Flex>
        {socialLinks.map((link: any, index: number) => (
          <Link href={link.href} isExternal={true} key={index}>
            <Image src={link.icon} h={"28px"} w={"28px"} ml={"32px"} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
