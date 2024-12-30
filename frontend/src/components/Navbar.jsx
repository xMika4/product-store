import { Flex, HStack, IconButton, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box _dark={{ bg: "gray.900" }} _light={{ bg: "gray.100" }}>
      <Flex
        h={16}
        align="center"
        px="10%"
        justify="space-between"
        direction={{ base: "column", sm: "row" }} 
      >
        {/* Logo */}
        <Flex align="center" cursor="pointer" onClick={() => navigate("/")}>
          <Text
            fontSize="2xl"
            fontWeight="extrabold"
            textTransform="uppercase"
            bgGradient="to-r"
            gradientFrom="teal.300"
            gradientTo="blue.600"
            _light={{ gradientFrom: "cyan.500" }}
            bgClip="text"
            mr={2}
          >
            Product Store
          </Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#378df5">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg>
        </Flex>

        {/* Buttons */}
        <HStack spacing={2} align="center">
          <IconButton
            onClick={() => navigate("/create")}
            aria-label="Create new product"
            _dark={{ bg: "gray.600", color: "white" }}
            _light={{ bg: "gray.300", color: "black" }}
            borderRadius="md"
            h="40px"
            w="60px"
          >
            <CiSquarePlus />
          </IconButton>
          <ColorModeButton
            _dark={{ bg: "gray.600", color: "white" }}
            _light={{ bg: "gray.300", color: "black" }}
            borderRadius="md"
            h="40px"
            w="60px"
          />
        </HStack>
      </Flex>
    </Box>
  );
};
export default Navbar;