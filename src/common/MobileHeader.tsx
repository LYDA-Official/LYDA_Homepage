import {
  Flex,
  Image,
  Text,
  Link,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  // Tooltip,
} from "@chakra-ui/react";
import React from "react";
import LOGO from "../assets/logo/LOGO.svg";
import { NavLink, useMatch } from "react-router-dom";
import theme from "../theme/index";
import Discord from "../assets/icons/Discord.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Telegram from "../assets/icons/Telegram.svg";
import { HashLink } from "react-router-hash-link";
import bugerIcon from "../assets/SVG/bugerIcon.svg";
import { useDisclosure } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const MobileHeader: React.FC = () => {
  const about = useMatch("/about");
  const registerCreators = useMatch("/register/creators");
  const registerFans = useMatch("/register/fans");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Flex
      justifyContent={"space-between"}
        bg={"transparent"}
      h={"80px"}
      alignItems="center"
      pl="20px"
      pr="16px"
      w={'100%'}
    >
      <NavLink to="/">
        <Image src={LOGO} h={"24px"} w={"90px"} />
      </NavLink>
      <Button
        px={0}
        mx={0}
        w={"30px"}
        h={"30px"}
        onClick={onOpen}
        bg={"transparent"}
        _focus={{
          bg: "transparent",
        }}
        _active={{
          bg: "transparent",
        }}
      >
        <Image w={"30px"} h={"30px"} src={bugerIcon} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bg={"#0C1333"}>
          <DrawerHeader
            h={"80px"}
            alignItems={"center"}
            pl={"16px"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"flex-end"}
          >
            <IconButton
              onClick={onClose}
              aria-label={`Close Navigation`}
              ml={"27px"}
              bg={"transparent"}
              icon={<CloseIcon h={"32px"} w={"32px"} color={'white.0'} />}
              _focus={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />
          </DrawerHeader>
          <DrawerBody>
            <Flex
              h="100%"
              flexDir={"column"}
              w={"100%"}
              justifyContent="center"
              alignItems={"center"}
            >
              <NavLink to="/about" onClick={onClose} style={{marginBottom:'40px'}}>
                <Text
                  color={about ? "blue.100" : "white.0"}
                  _hover={{ color: "blue.100" }}
                  fontSize='32px'
                >
                  ABOUT
                </Text>
              </NavLink>

              <HashLink to="/#pre-registration" onClick={onClose} >
                <Text
                  color={registerCreators || registerFans ? "blue.100" : "white.0"}
                  _hover={{ color: "blue.100" }}
                  fontSize='32px'
                >
                  PRE - REGISTER
                </Text>
              </HashLink>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex justifyContent={"center"} w="100%">
              {socialLinks.map((link: any, index: number) => (
                <Link href={link.href} isExternal={true} key={index}>
                  <Image src={link.icon} h={"32px"} w={"32px"} ml={"32px"} />
                </Link>
              ))}
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
        pos="absolute"
        zIndex={1000}
        fontFamily={theme.fonts.main}
        {...rest}
      >
        {children}
      </Flex>
    );
  };