import { useProductStore } from "@/store/product";
import {
  Container,
  Heading,
  VStack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toaster.create({
        title: message,
        duration: 5000,
        type: "error",
      });
    } else {
      setNewProduct({ name: "", price: "", image: "" });
      toaster.create({
        title: message,
        duration: 5000,
        type: "success",
      });
    }
  };
  return (
    <Container maxW={"lg"}>
      <VStack gap={8}>
        <Heading as={"h1"} size={"3xl"} textAlign={"center"} mb={8} mt={4}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          _dark={{ bg: "gray.800" }}
          _light={{ bg: "white" }}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack gap={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;