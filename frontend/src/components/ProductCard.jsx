import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Input,
  VStack,
  IconButton,
  Button,
} from "@chakra-ui/react";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";
import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

function ProductCard({ product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    toaster.create({
      title: message,
      duration: 3000,
      type: success ? "success" : "error",
    });
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    // Check if string is numeric
    if (isNaN(Number(updatedProduct.price))) {
      toaster.create({
        title: "Please enter a valid numeric price",
        duration: 3000,
        type: "error",
      });
      return; // Stop here
    }
  
    // If we haven't returned, the price is numeric
    const { success, message } = await updateProduct(pid, updatedProduct);
  
    toaster.create({
      title: message,
      duration: 3000,
      type: success ? "success" : "error",
    });
  };
  

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      _dark={{ bg: "#1e212f" }}
      _light={{ bg: "#f8f8f8" }}
      m={0}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text
          fontWeight="bold"
          fontSize="xl"
          _dark={{ color: "gray.200" }}
          _light={{ color: "gray.600" }}
          mb={4}
        >
          ${product.price}
        </Text>
        <HStack justifyContent={"space-between"}>
          <DialogRoot>
            <DialogTrigger>
              <IconButton
                aria-label="Edit product"
                _dark={{ bg: "blue.200" }}
                _light={{ bg: "blue.400" }}
              >
                <MdEdit />
              </IconButton>
            </DialogTrigger>
            <DialogContent _dark={{ bg: "#1e212f" }} _light={{ bg: "#f8f8f8" }}>
              <DialogHeader>
                <DialogTitle>Update Product</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    outline="none"
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={updatedProduct.price}
                    outline={"none"}
                    onChange={(e) =>
                      setUpdatedProduct((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                  />

                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    outline="none"
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              </DialogBody>
              <DialogFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() =>
                    handleUpdateProduct(product._id, updatedProduct)
                  }
                  _dark={{ bg: "blue.200" }}
                  _light={{ bg: "blue.400" }}
                >
                  Update
                </Button>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>

          <IconButton
            aria-label="Delete product"
            _dark={{ bg: "red.200" }}
            _light={{ bg: "red.400" }}
            onClick={() => handleDeleteProduct(product._id)}
          >
            <BsFillTrashFill />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
}

export default ProductCard;
