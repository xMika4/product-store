import { useProductStore } from "@/store/product";
import { Container, Text, VStack, Box, Input, Button } from "@chakra-ui/react";
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
    } else if (isNaN(Number(newProduct.price))) {
        toaster.create({
          title: "Please enter a valid numeric price",
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
    <Container maxW={"xl"}>
      <VStack gap={8}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          bgGradient={"to-r"}
          gradientFrom={"teal.300"}
          gradientTo={"blue.500"}
          bgClip={"text"}
          textAlign={"center"}
          _light={{ gradientFrom: "teal.500" }}
          pt={10}
          pb={10}
        >
          Create New Product
        </Text>
        <Box
          w={"full"}
          _dark={{ bg: "#1e212f" }}
          _light={{ bg: "#f8f8f8" }}
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
            <Button
              colorScheme={"blue"}
              onClick={handleAddProduct}
              w={"full"}
              _dark={{ bg: "blue.200" }}
              _light={{ bg: "blue.400" }}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
