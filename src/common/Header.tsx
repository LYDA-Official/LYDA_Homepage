import {
  Box,
  Flex,
  Button,
  Stack,
  Image,
  useTheme,
  CircularProgress,
  useColorMode,
  Text,
  Link,
  // Tooltip,
} from "@chakra-ui/react";
import React from "react";
import LOGO from "../assets/logo/LOGO.svg";
import { NavLink,useMatch } from "react-router-dom";
import theme from "../theme/index";
import Discord from "../assets/icons/Discord.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Telegram from "../assets/icons/Telegram.svg";
import { HashLink } from 'react-router-hash-link';

export const Header: React.FC = () => {
  const about = useMatch('/about');
  const register = useMatch('/register')

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
    <NavBarContainer>
      <Flex>
        <NavLink to="/">
          <Image src={LOGO} h={"36px"} w={"137px"} />
        </NavLink>
      </Flex>
      <Flex w={"301px"} fontSize={"20px"} fontWeight={500}>
        <NavLink to="/about" style={{ width: "90%" }}>
          <Text color={about?'blue.100': 'white.0'} _hover={{color: 'blue.100'}}>ABOUT</Text>
        </NavLink>
        {/* <NavLink to="/register" style={{ width: "100%" }}>
        <Text color={register?'blue.100': 'white.0'} _hover={{color: 'blue.100'}}>PRE - REGISTER</Text>
          
        </NavLink> */}
        <HashLink to='/#pre-registration' style={{ width: "90%" }}>
        <Text color={register?'blue.100': 'white.0'} _hover={{color: 'blue.100'}}>PRE - REGISTER</Text>
        </HashLink>
      </Flex>
      <Flex>
        {socialLinks.map((link: any, index: number) => (
          <Link href={link.href} isExternal={true} key={index}>
            <Image src={link.icon} h={"32px"} w={"32px"} ml={"32px"} />
          </Link>
        ))}
      </Flex>
    </NavBarContainer>
  );
};

const NavBarContainer = ({ children, ...rest }: { children: any }) => {


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={"88px"}
      mt={"48px"}
      h={"52px"}
      pos="absolute"
      zIndex={1000}
     
      fontFamily={theme.fonts.main}
      {...rest}
    >
      {children}
    </Flex>
  );
};
