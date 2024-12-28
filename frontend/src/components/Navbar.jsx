import { Container, Flex, HStack, IconButton, Link as ChakraLink, useColorMode} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row", }}>
        <ChakraLink as={RouterLink} to={"/"} fontSize={"2xl"} fontWeight={"bold"} textTransform={"uppercase"} textAlign={"center"} bgGradient={"to-r"} gradientFrom={"cyan.400"} gradientTo={"blue.500"} bgClip={"text"} _focus={{ outline: "none", boxShadow: "none" }}>
          Product store
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#378df5">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg>
        </ChakraLink>
        <HStack spacing={2} alignItems={"center"}>
          <ChakraLink as={RouterLink} to={"/create"} fontSize={"30px"} size={"md"}>
            <IconButton aria-label="Create" bg="gray.700" borderRadius="md" height="40px" width="60px" _hover={{ bg: "gray.600" }}>
              <CiSquarePlus fill="white"  />
            </IconButton>
          </ChakraLink>
          <IconButton onClick={toggleColorMode} aria-label="Toggle" bg="gray.700" borderRadius="md" height="40px" width="60px" _hover={{ bg: "gray.600" }} >
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;