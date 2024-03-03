import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import logo from ".//assests/logo.png";
import "./Header.css";
import { LuInstagram } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="nav-mobile">
      <Button
        zIndex={"overlay"}
        onClick={onOpen}
        backgroundColor={"black"}
        color={"white"}
        rounded={"100"}
        size={"40px"}
        padding={"10px"}
        position={"fixed"}
        top={"6"}
        left={"6"}
        ref={btnRef}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay
          backgroundColor={"white"}
          backdropFilter={"blur(10px)"}
        />
        <DrawerContent>
          <DrawerCloseButton />
          <VStack
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "60%",
              height: "100vh"
            }}
          >
            <img
              src={logo}
              alt="School Logo"
              className="h-24 w-24 rounded-full"
            />
            <DrawerHeader style={{ fontSize: "1.2rem" }}>
              S.F.S School Tanuku
            </DrawerHeader>

            <DrawerBody>
              <VStack>
                <NavLink
                  exact
                  to="/"
                  className=" py-2 px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about-us"
                  className="py-2  px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/gallery"
                  className=" py-2 px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  Gallery
                </NavLink>

                <NavLink
                  to="/results"
                  className=" py-2 px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  Results
                </NavLink>

                <NavLink
                  to="/alumni"
                  className="py-2 px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  Alumni
                </NavLink>

                <NavLink
                  to="/sfs-alumni-foundation"
                  className="py-2 px-1.5 cursor-pointer font-bold"
                  onClick={onClose}
                >
                  Alumni Foundation
                </NavLink>
              </VStack>
            </DrawerBody>
            <DrawerFooter style={{gap: "20px"}}>
            <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <CiFacebook size={30} />
          </a>
            <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <FaYoutube size={30} />
          </a>
            <a
            href="https://www.instagram.com/"
            rel="noreferrer"
            target={"_blank"}
          >
            <LuInstagram size={30}  />
          </a>
          </DrawerFooter>
          </VStack>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerExample;
