import { useProductStore } from "@/store/product";
import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { BsFillTrashFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";

function ProductCard({ product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const [open, setOpen] = useState(false);
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: message,
        duration: 3000,
        type: "error",
      });
    } else {
      toaster.create({
        title: message,
        duration: 3000,
        type: "success",
      });
    }
  };
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setOpen(false);
    if (!success) {
      toaster.create({
        title: message,
        duration: 3000,
        type: "error",
      });
    } else {
      toaster.create({
        title: message,
        duration: 3000,
        type: "success",
      });
    }
  };
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      _dark={{ bg: "gray.800" }}
      _light={{ bg: "white" }}
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
          <IconButton
            aria-label="Edit product"
            _dark={{ bg: "blue.200" }}
            _light={{ bg: "blue.400" }}
            onClick={() => setOpen(true)} // Set open to true when clicked
          >
            <MdEdit />
          </IconButton>

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
      <Box>
        <DialogRoot
          lazyMount
          open={open}
          onOpenChange={(isOpen) => setOpen(isOpen)}
        >
          <DialogContent>
            <DialogHeader>Update Product</DialogHeader>
            <DialogBody>
              <VStack spacing={4}>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
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
              <DialogActionTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogActionTrigger>
              <Button
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </Box>
    </Box>
  );
}

export default ProductCard;