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
import { NavLink } from "react-router-dom";
import theme from "../theme/index";
import Discord from "../assets/icons/Discord.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Telegram from "../assets/icons/Telegram.svg";

export const Header: React.FC = () => {
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
      <Flex w={"300px"} fontSize={"20px"} fontWeight={500}>
        <NavLink to="/about" style={{ width: "90%" }}>
          ABOUT
        </NavLink>
        <NavLink to="/about" style={{ width: "100%" }}>
          PRE - REGISTER
        </NavLink>
      </Flex>
<Flex>
{socialLinks.map ((link:any, index:number) => (
            <Link    href={link.href} isExternal={true}>
                <Image src={link.icon} h={'32px'} w={'32px'} ml={'32px'} />
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