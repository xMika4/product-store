import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

function ProductCard({ product }) {
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ translateY:"-5px", shadow: "xl" }}
      _dark={{ bg: "white" }}
      _light={{ bg: "gray:800" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      >
        <Box p={4}>
          <Heading as={"h3"} size={"md"} mb={2}>
            {product.name}
          </Heading>
          <Text
            fontWeight={"bold"}
            fontSize={"xl"}
            _dark={{ color: "gray.600" }}
            _light={{ color: "gray.200" }}
            mb={4}
          >
            ${product.price}
          </Text>
          <HStack spacing={2}>
            <IconButton colorScheme={"blue"}>
              <MdEdit />
            </IconButton>
            <IconButton colorScheme={"red"}>
              <BsFillTrashFill />
            </IconButton>
          </HStack>
        </Box>
      </Image>
    </Box>
  );
}

export default ProductCard;
