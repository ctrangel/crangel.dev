import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        colorScheme="cyan"
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        style={{
          margin: "10px",
        }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{
                margin: "10px",
                fontSize: "20px",
              }}
            >
              <ScrollLink
                to="Home-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  style={{
                    margin: "10px",
                  }}
                >
                  Home
                </Button>
              </ScrollLink>
              <ScrollLink
                to="About-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  style={{
                    margin: "10px",
                  }}
                >
                  About
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Projects-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  style={{
                    margin: "10px",
                  }}
                >
                  Projects
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Technologies-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  style={{
                    margin: "10px",
                  }}
                >
                  Technology
                </Button>
              </ScrollLink>
              <ScrollLink
                to="Contact-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  style={{
                    margin: "10px",
                  }}
                >
                  Contact
                </Button>
              </ScrollLink>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavDrawer;
